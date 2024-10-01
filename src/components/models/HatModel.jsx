"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/hat-transformed.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[1.06, -10.318, 0]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
        >
          <group
            name="e8115fdd94894d8b82a67b927f4a8a34fbx"
            rotation={[-Math.PI, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Kapelusz_Karola_Wojtyly"
                  position={[1, 1, 1]}
                  rotation={[0, 0, 0]}
                  scale={10.644}
                >
                  <group name="Object_5">
                    <mesh
                      name="Kapelusz_Karola_Wojtyly_defaultMat_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.Kapelusz_Karola_Wojtyly_defaultMat_0.geometry
                      }
                      material={materials.defaultMat}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/hat-transformed.glb");
