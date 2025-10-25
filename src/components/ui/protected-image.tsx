"use client"

import Image, { type ImageProps } from "next/image"

type ProtectedImageProps = Omit<ImageProps, "onContextMenu">

export function ProtectedImage(props: ProtectedImageProps): JSX.Element {
  const { draggable, ...rest } = props

  return (
    <Image
      draggable={draggable ?? false}
      onContextMenu={(event) => event.preventDefault()}
      {...rest}
    />
  )
}
