import { useGLTF, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import { useRef } from 'react'
import { Mesh } from 'three'

export default function Model() {
  const { nodes } = useGLTF('/media/torus.glb')
  const mesh = useRef<Mesh>(null!)
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.02
    mesh.current.rotation.z += 0.02
  })

  return (
    <group scale={viewport.width / 3}>
      <Text fontSize={0.5} fontWeight="bold" position={[0, 0, -0.5]}>
        Hello World!
      </Text>
      <mesh ref={mesh} {...nodes.Torus}></mesh>
    </group>
  )
}
