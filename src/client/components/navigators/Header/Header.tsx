import type { FC } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import { useAuthUser } from '../../../hooks/useAuthUser';
import { useOpenModal } from '../../../store/modal';
import { Anchor } from '../../foundation/Anchor';
import { Icon } from '../../foundation/Icon';

import * as styles from './Header.styles';

export const Header: FC = () => {
  const { isAuthUser } = useAuthUser();
  const handleOpenModal = useOpenModal();

  return (
    <header className={styles.container()}>
      <Anchor href="/">
        <div className={styles.logo()}>
          <svg fill="none" height="32" width="205" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.383 5.647H4.577l-3.537-.07-.162.14.07 2.06v1.066l-.07 2.501.162.163 3.537-.07h12.806l3.514.07.185-.163-.07-2.501V7.777l.07-2.015-.185-.185-3.514.07Zm-2.15 3.567V7.916h2.45v1.298h-2.45Zm-3.167 0h-2.38V7.916h2.38v1.298ZM6.52 7.916v1.298H4.184V7.916h2.335Zm11.95 15.218.162-.232-.07-3.243v-4.4l.07-2.803-.162-.208-2.889.07H6.472l-2.89-.07-.16.208.068 2.803v4.4l-.138 3.266.162.209 2.935-.07A33.207 33.207 0 0 1 0 24.524l1.456 2.061c.162.232.37.255.717.208 2.473-.347 5.409-1.204 7.559-2.084l.023-.209-1.688-1.436h5.895l-1.503 1.598.07.163c2.45.463 5.085 1.18 7.443 1.992l.208-.07 1.734-2.061-.07-.209c-1.756-.648-3.513-1.065-5.2-1.39l1.826.047ZM6.727 20.007h8.483v.926H6.727v-.926Zm0-1.876v-.903h8.483v.903H6.727Zm0-2.78v-.903h8.483v.903H6.727Zm20.365.417a81.705 81.705 0 0 0 6.865-1.76c-3.005 3.011-5.756 5.93-9.177 9.844v.231l2.797 1.946.254-.07c1.503-2.084 2.682-3.613 3.976-5.026.763-.857 1.133-1.088 1.595-1.088.532 0 .74.208.832.671.162.996.208 1.83.278 2.71.139 1.668.67 2.64 4.692 2.64 1.48 0 2.728-.045 3.884-.115l.138-.208-.23-3.15-.209-.116c-.832.092-1.941.185-3.12.185-1.78 0-1.873-.093-1.942-1.158a13.638 13.638 0 0 0-.277-1.876c-.232-1.066-1.734-1.807-2.844-1.598 1.41-1.413 2.751-2.594 3.93-3.706.3-.278.624-.695.624-1.367 0-1.343-1.202-2.27-2.335-2.27-.277 0-1.11.232-1.294.278-3.63.811-5.918 1.228-9.062 1.645l-.138.185.6 3.057.163.116Zm2.542-7.481c2.335.672 4.577.973 7.282 1.204l.208-.115.578-3.058-.139-.162c-2.681-.092-4.993-.417-7.073-.973l-.185.116-.786 2.803.115.185Zm21.637 2.71a90.611 90.611 0 0 1 5.917-1.46c-3.074 3.058-5.987 6.254-9.177 9.914l.023.255 2.474 1.992.231-.023c2.45-3.174 4.831-5.35 8.137-5.35 1.918 0 3.143 1.296 3.143 2.918 0 1.621-.416 2.71-1.78 3.358-.624-1.621-1.941-3.428-4.692-3.428-1.872 0-3.537 1.714-3.537 3.22 0 2.64 2.312 3.775 5.04 3.775 5.34 0 8.506-2.386 8.506-6.601 0-3.59-2.335-5.976-5.825-5.976-.97 0-1.78.046-2.89.602 1.92-1.899 3.214-3.08 5.086-4.933.347-.348.416-.788.416-1.205 0-1.111-.97-2.015-2.127-2.015-2.52.325-6.079.88-9.593 1.668l-.138.208.6 2.965.186.116Zm6.08 12.345a3.07 3.07 0 0 1-.74.07c-1.18 0-1.711-.44-1.711-.927 0-.417.416-.602.878-.602.555 0 1.341.463 1.572 1.46Zm15.2-12.723c0-.533.181-.98.542-1.343.38-.38.837-.571 1.37-.571h10.322c.038-.495.237-.915.598-1.257.38-.343.837-.515 1.37-.515.512.02.95.2 1.31.543.343.343.533.753.57 1.229h1.341c.532 0 .989.18 1.369.543.361.38.542.838.542 1.371s-.19.99-.57 1.371a1.82 1.82 0 0 1-1.341.543h-1.34v10.6c-.114 1.143-.741 1.762-1.882 1.857-.532 0-.998-.17-1.397-.514a1.78 1.78 0 0 1-.57-1.343v-10.6H74.462c-.532 0-.979-.19-1.34-.571a1.78 1.78 0 0 1-.57-1.343Zm9.183 2.371c.513.02.922.21 1.226.572.323.343.465.771.427 1.286l-.17 1.514a15.004 15.004 0 0 1-1.056 3.829 8.738 8.738 0 0 1-2.31 3.057c-.969.819-2.12 1.266-3.45 1.342H74.52c-.513-.019-.95-.2-1.312-.542a1.955 1.955 0 0 1-.541-1.315c0-.533.171-.99.513-1.371.361-.381.808-.581 1.34-.6h1.426a2.847 2.847 0 0 0 1.882-.829c.551-.514.931-1.095 1.14-1.743.21-.666.362-1.39.457-2.17l.114-1.172c.095-.534.351-.972.77-1.315a2.12 2.12 0 0 1 1.426-.543Zm13.259 3.058c0-.534.18-.981.542-1.343.38-.381.836-.572 1.368-.572h14.314c.533 0 .989.181 1.369.543.361.381.542.838.542 1.372s-.19.99-.571 1.371a1.816 1.816 0 0 1-1.34.543H96.903c-.532 0-.979-.19-1.34-.571a1.78 1.78 0 0 1-.57-1.343Zm21.614-4.915c0-.533.18-.98.541-1.343a1.867 1.867 0 0 1 1.369-.57h4.506l.056-.43c.096-.533.352-.971.77-1.314a2.12 2.12 0 0 1 1.426-.543c.513.02.922.21 1.226.572.323.343.466.771.428 1.285l-.057.43h7.442c.533 0 .989.18 1.369.542.399.419.58.876.542 1.371l-.628 5.229a15.004 15.004 0 0 1-1.055 3.829 9.483 9.483 0 0 1-2.281 3.114c-.95.876-1.939 1.305-2.965 1.286h-1.768c-.513-.02-.951-.2-1.312-.543a1.955 1.955 0 0 1-.542-1.315c0-.533.171-.99.514-1.371a1.87 1.87 0 0 1 1.34-.6h1.311c.571-.02 1.074-.286 1.512-.8a5.146 5.146 0 0 0 .998-1.772c.209-.666.361-1.39.456-2.17l.228-2.258c.057-.457-.105-.695-.485-.714h-5.218l-.485 3.314a14.963 14.963 0 0 1-1.055 3.828 8.737 8.737 0 0 1-2.309 3.058c-.97.819-2.12 1.266-3.451 1.342h-1.254c-.514-.019-.951-.2-1.312-.542a1.955 1.955 0 0 1-.542-1.315c0-.533.171-.99.513-1.371.362-.381.809-.581 1.341-.6h.798a2.845 2.845 0 0 0 1.882-.829c.551-.514.932-1.095 1.141-1.743.209-.666.361-1.39.456-2.17l.428-2.972h-3.964c-.532 0-.979-.19-1.34-.572a1.78 1.78 0 0 1-.57-1.343Zm11.177-5.114c0-.571.2-1.057.599-1.457.399-.4.884-.6 1.454-.6.571 0 1.056.2 1.455.6.399.4.598.886.598 1.457s-.199 1.057-.598 1.457c-.399.4-.884.6-1.455.6-.57 0-1.055-.2-1.454-.6a1.987 1.987 0 0 1-.599-1.457Zm4.905 0c0-.571.199-1.057.599-1.457.399-.4.884-.6 1.454-.6s1.055.2 1.454.6c.399.4.599.886.599 1.457s-.2 1.057-.599 1.457c-.399.4-.884.6-1.454.6s-1.055-.2-1.454-.6c-.4-.4-.599-.886-.599-1.457Zm7.157 16.657c0-.533.181-.98.542-1.343.38-.38.836-.571 1.368-.571h13.801c.533 0 .989.18 1.369.543.361.38.542.838.542 1.371s-.19.99-.57 1.372a1.82 1.82 0 0 1-1.341.543h-13.801c-.532 0-.978-.191-1.34-.572a1.78 1.78 0 0 1-.57-1.343Zm0-13.028c0-.534.181-.981.542-1.343.38-.381.836-.572 1.368-.572h13.801c.533 0 .989.181 1.369.543.361.381.542.838.542 1.372 0 .533-.19.99-.57 1.371a1.82 1.82 0 0 1-1.341.543h-13.801c-.532 0-.978-.19-1.34-.572a1.78 1.78 0 0 1-.57-1.342Zm36.042 3.485-1.939 6.115c-.608 1.752-1.369 3.066-2.281 3.942-.912.877-1.901 1.353-2.965 1.429h-1.825a1.539 1.539 0 0 1-1.056-.457 1.408 1.408 0 0 1-.427-1.029c0-.438.133-.81.399-1.114a1.517 1.517 0 0 1 1.084-.486h1.026c.59-.019 1.131-.228 1.626-.628.513-.42.903-.896 1.169-1.429a9.702 9.702 0 0 0 .655-1.714l1.683-5.629c.114-.324.275-.59.485-.8.209-.21.522-.314.941-.314.418 0 .769.152 1.054.457.305.305.457.676.457 1.114 0 .191-.029.372-.086.543Zm-13.202-2c.418 0 .77.143 1.055.429.285.286.437.638.456 1.057v4.657c-.095.914-.598 1.41-1.511 1.486a1.63 1.63 0 0 1-1.112-.429 1.393 1.393 0 0 1-.456-1.057V12.62c.019-.438.18-.79.484-1.057a1.532 1.532 0 0 1 1.084-.429Zm4.562 0c.419 0 .77.143 1.055.429.285.286.438.638.457 1.057v4.657c-.095.914-.599 1.41-1.512 1.486a1.63 1.63 0 0 1-1.112-.429 1.393 1.393 0 0 1-.456-1.057V12.62c.019-.438.181-.79.485-1.057a1.528 1.528 0 0 1 1.083-.429Zm19.305-3.4h12.118c.532 0 .989.181 1.369.543.399.42.58.876.542 1.372l-.913 6.714a15.004 15.004 0 0 1-1.055 3.829 8.737 8.737 0 0 1-2.309 3.057c-.97.819-2.12 1.266-3.451 1.342h-2.623c-.513-.019-.951-.2-1.312-.542a1.954 1.954 0 0 1-.541-1.315c0-.533.171-.99.513-1.371a1.87 1.87 0 0 1 1.34-.6h2.167a2.847 2.847 0 0 0 1.882-.829c.551-.514.931-1.095 1.141-1.743.209-.666.361-1.39.456-2.17l.513-3.744c.057-.457-.104-.695-.485-.714h-8.041c-.19.819-.447 1.6-.77 2.343a8.737 8.737 0 0 1-2.309 3.057c-.97.819-2.12 1.267-3.451 1.343h-.627a1.95 1.95 0 0 1-1.312-.543 1.954 1.954 0 0 1-.541-1.314c0-.534.171-.99.513-1.372a1.87 1.87 0 0 1 1.34-.6h.171a2.847 2.847 0 0 0 1.882-.828c.551-.515.932-1.096 1.141-1.743.209-.667.361-1.39.456-2.172V9.59c.095-.533.352-.98.77-1.342a2.186 2.186 0 0 1 1.426-.515Z"
              fill="#3BA175"
            />
          </svg>
        </div>
      </Anchor>
      {isAuthUser ? (
        <Anchor data-testid="navigate-order" href={'/order'}>
          <div className={styles.orderLink()}>
            <Icon color="#222222" height={20} width={20}>
              <FaShoppingCart></FaShoppingCart>
            </Icon>
          </div>
        </Anchor>
      ) : (
        <button
          className={styles.signInButton()}
          data-testid="navigate-signin"
          onClick={() => handleOpenModal('SIGN_IN')}
        >
          <Icon color="#222222" height={20} width={20}>
            <FaUser></FaUser>
          </Icon>
        </button>
      )}
    </header>
  );
};
