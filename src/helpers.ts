import React, {
  cloneElement,
  PropsWithChildren,
  ReactChild,
  ReactNode
} from 'react'

const { Children, isValidElement } = React

export const recursivelyWalkChildren = (
  children: ReactNode,
  fn: (child: ReactChild) => ReactNode
): any =>
  Children.map(children, child => {
    if (!isValidElement(child)) return fn(child as ReactChild)

    const props: PropsWithChildren<any> = child.props ?? {}

    if (!props.children) return child

    return cloneElement(child, {
      ...props,
      children: recursivelyWalkChildren(props.children, fn)
    })
  })
