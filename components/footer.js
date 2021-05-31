import { Disclosure } from '@headlessui/react'
import Container from './container'

export default function Footer() {
  return (
    
    <footer className="bg-accent-1 border-t border-accent-2">
      <Disclosure><Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel></Disclosure>
      <Container>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-20">
                <div className="flex-shrink-0 flex items-center">
                  
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://mikecameron.ca/wp-content/uploads/2020/09/Mike-Cameron-Logo-Anternative.png"
                    alt="Workflow"
                  />
                  
                </div>
                
                <div className="hidden sm:block sm:ml-6">
                  
                </div>
              </div>
             
              
      </Container>
    </footer>
  )
}
