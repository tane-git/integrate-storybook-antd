// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Based on https://www.figma.com/file/sCAngiTf2mPOWPo9kcoEE7/SubQuery-Design-System?node-id=26%3A3

import * as React from 'react';
// import clsx from 'clsx';
import cx from "classnames";

// antd
import { Button as AntButton } from 'antd';
import { NativeButtonProps } from "antd/lib/button/button.d";

// styles
import styles from './styles/style.module.less';
export interface IProps extends NativeButtonProps {
  gradient?: boolean;
  label?: string;
  outlined?: boolean;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({
  // >>> ANTD PROPS
  disabled = false,
  size = 'large',
  type = 'default',
  icon,

  // >>> SQ PROPS
  outlined = false,
  gradient = false,
  label,
  iconRight
}) => {
  return (
    <AntButton
      // antd props
      type={type}
      size={size}
      shape='round'
      disabled={disabled}
      icon={icon}

      className={cx(
        // >>> ADDING subquery styles
        {
          [styles.gradient]: gradient,
          [styles.outlined]: outlined,
        },
        // outlined && styles.outlined,
        // gradient && styles.gradient,

        // >>> MODIFYING existing antd styles
        type === 'link' && styles.link,
        type === 'text' && styles.text,
        type === 'default' && styles.default
        )}
    >
      {label}{iconRight}
    </AntButton >
  );
}