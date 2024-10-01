/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb");

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      rotation={[-Math.PI / 2.4, 0, 0]}
      position={[0, 1, -0.6]}
      scale={[0.02, 0.02, 0.02]}
    >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_suit_0.geometry}
          material={materials.suit}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_shirt_0.geometry}
          material={materials.shirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_tie_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_leather_0.geometry}
          material={materials.leather}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_sole_0.geometry}
          material={materials.sole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_skin_0.geometry}
          material={materials.skin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["man_in_suit_Material_#128_0"].geometry}
          material={materials.Material_128}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_circle_0.geometry}
          material={materials.circle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_belt_part_0.geometry}
          material={materials.belt_part}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_button_0.geometry}
          material={materials.button}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_lips_0.geometry}
          material={materials.lips}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_hair_0.geometry}
          material={materials.hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat3_0.geometry}
          material={materials.eye_mat3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat2_0.geometry}
          material={materials.eye_mat2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.man_in_suit_eye_mat1_0.geometry}
          material={materials.eye_mat1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/wizard-transformed.glb");
