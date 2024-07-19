import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const SomeComponent = forwardRef((props, ref) => {
        const localInput = useRef()

        useImperativeHandle(ref, () => {
            return {
                validate: () => {
                    if (localInput.current.value.length > 3) {
                        localInput.current.value = ""
                    }
                }
            }
        })

        return (
            <div>
                <p>Insira no máximo 3 caracteres.</p>
                <input type="text" ref={localInput} />

            </div>
        )

    })

export default SomeComponent