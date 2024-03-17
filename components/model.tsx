import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

import { useRef } from 'react'
import { Mesh } from 'three'
import { roughness } from 'three/examples/jsm/nodes/Nodes.js'

export default function Model() {
  const { nodes } = useGLTF('/media/torus.glb')
  const mesh = useRef<Mesh>(null!)
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.02
    mesh.current.rotation.y += 0.01
  })

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 1, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  })

  return (
    <group scale={viewport.width / 3}>
      <Text fontSize={0.5} fontWeight="bold" position={[0, 0, -0.75]}>
        Hello World!
      </Text>
      <mesh ref={mesh} {...nodes.Torus}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
