import React, { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import {Beans} from '@web3uikit/icons'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { isConnected } = useAccount()
    const { connect, connectors } = useConnect()
    const { disconnect } = useDisconnect()
    

    useEffect(() => {
        if (!isLoggedIn) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [isConnected])
    
  return (
      <section className='header'>
          <section className='header_logoSection'>
              <h1 className='title'>Beans Staking</h1>
              <Beans fontSize ='20px' className='beans'/>
          </section>
          <section className='header_btn'>
              {!isLoggedIn ? (
                  <button
                      className='connectBtn'
                      onClick={disconnect}
                  >Disconnect Wallet</button>
              ) :
                  (
                      <>
                          {connectors.map((connector) => (
                              <button
                                  disabled={!connector.ready}
                                  key={connector.id}
                                  onClick={() => connect({ connector })}
                                  className='connectBtn'
                              >
                                  Connect Wallet 
                              </button>
                          ))}
                      </>
              )    
                }
          </section>
    </section>
  )
}
