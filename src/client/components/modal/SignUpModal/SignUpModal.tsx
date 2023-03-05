import type { FormikErrors } from 'formik';
import { useFormik } from 'formik';
import type { FC } from 'react';
import { useCallback, useContext, useState } from 'react';

import { ModalContext } from '../../../hooks/useModalProvider';
import { useSignUp } from '../../../hooks/useSignUp';
import { Modal } from '../../foundation/Modal';
import { PrimaryButton } from '../../foundation/PrimaryButton';
import { TextInput } from '../../foundation/TextInput';

import * as styles from './SignUpModal.styles';

export type SignUpForm = {
  email: string;
  name: string;
  password: string;
};

export const SignUpModal: FC = () => {
  const { signUp } = useSignUp();

  const { isSignUpModalOpen, setIsLoginModalOpen, setIsSignUpModalOpen } = useContext(ModalContext);
  const [submitError, setSubmitError] = useState<Error | null>(null);
  const formik = useFormik<SignUpForm>({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    async onSubmit(values, { resetForm }) {
      try {
        await signUp({
          variables: {
            email: values.email,
            name: values.name,
            password: values.password,
          },
        });
        resetForm();
        setSubmitError(null);
        setIsSignUpModalOpen(false);
      } catch (err) {
        setSubmitError(err as Error);
      }
    },
    validate(values) {
      const errors: FormikErrors<SignUpForm> = {};
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
    setIsSignUpModalOpen(false);
  }, [setIsSignUpModalOpen]);

  const onSignInClick = useCallback(() => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(true);
  }, [setIsLoginModalOpen, setIsSignUpModalOpen]);

  return (
    <Modal onHide={onHide} show={isSignUpModalOpen}>
      <div className={styles.inner()}>
        <header className={styles.header()}>
          <h2 className={styles.heading()}>会員登録</h2>
          <button
            className={styles.switchToSignInButton()}
            data-testid="modal-switch-to-signin"
            onClick={onSignInClick}
          >
            ログイン
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
              id="name"
              label="名前"
              onChange={formik.handleChange}
              placeholder="名前を入力"
              type="text"
              value={formik.values.name}
            />
            <p className={styles.error()}>{formik.errors.name}</p>

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
              登録する
            </PrimaryButton>
          </div>
          {submitError ? <p className={styles.error()}>会員登録に失敗しました</p> : null}
        </form>
      </div>
    </Modal>
  );
};
