import classNames from 'classnames';
import { FC } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { SITE_TITLE } from '../../utils/contants';

export enum LogoTypes {
  default,
  large,
}

interface LogoProps {
  type?: LogoTypes;
}

export const Logo: FC<LogoProps> = ({
  type = LogoTypes.default,
}: LogoProps) => {
  const initials = SITE_TITLE.split(' ')
    .filter((c, i) => (i < 2 ? c : undefined))
    .map((c) => !!c && c.charAt(0))
    .join('')
    .toUpperCase();
  const isLarge = type === LogoTypes.large;
  const containerClasses = classNames(
    isLarge ? 'flex-col' : '',
    'inline-flex',
    'items-center'
  );
  const initialsClasses = classNames(
    isLarge ? 'w-40 h-40 text-7xl' : 'w-8 h-8',
    'inline-flex',
    'items-center',
    'justify-center',
    'bg-sky-500',
    'rounded-full'
  );
  const titleClasses = classNames(
    isLarge ? 'mt-4 text-5xl' : 'ml-2',
    'inline-flex',
    'capitalize'
  );

  return (
    <div className={containerClasses}>
      <div className={initialsClasses}>{initials}</div>

      <div className={titleClasses}>
        {isLarge ? (
          <>
            <MdArrowRightAlt className="mt-1" />
            {SITE_TITLE}
            <MdArrowRightAlt className="mt-1 rotate-180" />
          </>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{SITE_TITLE}</>
        )}
      </div>
    </div>
  );
};
