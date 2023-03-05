import type { FormikErrors } from 'formik';
import { useFormik } from 'formik';
import type { FC } from 'react';
import { useCallback, useContext, useState } from 'react';

import { ModalContext } from '../../../hooks/useModalProvider';
import { useSignIn } from '../../../hooks/useSignIn';
import { Modal } from '../../foundation/Modal';
import { PrimaryButton } from '../../foundation/PrimaryButton';
import { TextInput } from '../../foundation/TextInput';

import * as styles from './SignInModal.styles';

export type SignInForm = {
  email: string;
  password: string;
};

export const SignInModal: FC = () => {
  const { signIn } = useSignIn();
  const { isLoginModalOpen, setIsLoginModalOpen, setIsSignUpModalOpen } = useContext(ModalContext);

  const [submitError, setSubmitError] = useState<Error | null>(null);
  const formik = useFormik<SignInForm>({
    initialValues: {
      email: '',
      password: '',
    },
    async onSubmit(values, { resetForm }) {
      try {
        await signIn({
          variables: {
            email: values.email,
            password: values.password,
          },
        });
        resetForm();
        setSubmitError(null);
        setIsLoginModalOpen(false);
      } catch (err) {
        setSubmitError(err as Error);
      }
    },
    validate(values) {
      const errors: FormikErrors<SignInForm> = {};
      // NOTE: 文字列に @ が含まれているか確認する
      if (values.email != '' && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors['email'] = 'メールアドレスの形式が間違っています';
      }
      // NOTE: 文字列に英数字以外の文字が含まれているか確認する
      if (values.password != '' && !/[a-zA-Z0-9]/.test(values.password)) {
        errors['password'] = '英数字以外の文字を含めてください';
      }
      return errors;
    },
    validateOnChange: true,
  });
  const onHide = useCallback(() => {
    setIsLoginModalOpen(false);
  }, [setIsLoginModalOpen]);

  const onSignUpClick = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  }, [setIsLoginModalOpen, setIsSignUpModalOpen]);

  return (
    <Modal onHide={onHide} show={isLoginModalOpen}>
      <div className={styles.inner()}>
        <header className={styles.header()}>
          <h2 className={styles.heading()}>ログイン</h2>
          <button
            className={styles.switchToSignUpButton()}
            data-testid="modal-switch-to-signup"
            onClick={onSignUpClick}
          >
            会員登録
          </button>
        </header>
        <form className={styles.form()} onSubmit={formik.handleSubmit}>
          <div className={styles.inputList()}>
            <TextInput
              required
              id="email"
              label="メールアドレス"
              onChange={formik.handleChange}
              placeholder="メールアドレスを入力"
              type="email"
              value={formik.values.email}
            />
            <p className={styles.error()}>{formik.errors.email}</p>

            <TextInput
              required
              id="password"
              label="パスワード"
              onChange={formik.handleChange}
              placeholder="パスワードを入力"
              type="password"
              value={formik.values.password}
            />
            <p className={styles.error()}>{formik.errors.password}</p>
          </div>
          <div className={styles.submitButton()}>
            <PrimaryButton size="base" type="submit">
              ログイン
            </PrimaryButton>
          </div>
          {submitError != null ? <p className={styles.error()}>ログインに失敗しました</p> : null}
        </form>
      </div>
    </Modal>
  );
};
