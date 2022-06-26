import clsx from 'clsx'
import type { FC } from 'react'

import styles from './Example.module.scss'

import { ExampleButton } from '@/components/atoms/ExampleButton'
export const Example: FC = () => {
  return (
    <main className={clsx(styles.main)}>
      <h1>Example Page</h1>
      <p>This is Example page here.</p>
      <ExampleButton>Example Button</ExampleButton>
    </main>
  )
}
