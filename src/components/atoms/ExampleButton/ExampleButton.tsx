import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import styles from './ExampleButton.module.scss'

export const ExampleButton = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
  function ButtonBase({ className, ...props }, ref) {
    return <button {...props} className={clsx(className, styles.module)} ref={ref} />
  },
)
