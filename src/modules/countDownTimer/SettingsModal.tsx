import {
  Modal,
  ModalOverlay,
  ModalContent,
  //ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'


import useCountDown from './useCountDown'
import Counter from './Counter'

function SettingsModal({
  children,
  pickTime,
  setPickTime,
  saveTimer,
  cancelTimer,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>
        {children}
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            
            <form 
            className='
            flex items-center gap-2
            '
            >
              <Counter
              type='hour'
              count={pickTime.hours}
              setCount={setPickTime}
              />
              :
              <Counter
              type='min'
              count={pickTime.minutes}
              setCount={setPickTime}
              />
              :
              <Counter
              type='sec'
              count={pickTime.seconds}
              setCount={setPickTime}
              />
            </form>
            
          </ModalBody>

          <ModalFooter
          display={'flex'}
          >
            <Button 
            className='flex-1'
            //colorScheme='blue' 
            variant={'outline'}
            mr={3} 
            onClick={onClose}>
              Cancel
            </Button>
            <Button 
            className='flex-1'

            //colorScheme='blue' 
            variant={'outline'}
            mr={3} 
            onClick={() => {
              onClose();
              saveTimer();
            }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SettingsModal