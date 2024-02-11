import { Button, Image, Input, InputGroup, InputRightElement, Spinner, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsSendFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import SectionHead from '../SectionHead'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const emailSuccessToast = () => toast.success("I got your email, i'll come back to you soon.");
const emailErrorToast = () => toast.error("Something wen wrong!");

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const PUBLIC_ID = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  const [loading, setLoading] = useState(false);

  // react-hook-form----------
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handSendEmail = async (data:any) => {
    console.log('--')
    const {name, email, message} = data;

    const emailData = {
      to_name: 'morteza rostami',
      from_name: name,
      from_email: email,
      message: message,
    };
    
    // send email:
    try {
      setLoading(true);
      emailjs.init(PUBLIC_ID);
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailData,
      )
      .then((res:any) => {
        setLoading(false);
        emailSuccessToast();
        reset();
      })
      .catch((error:any) => {
        console.log('Error sending email: ', error?.message || error);
        setLoading(false);
        emailErrorToast();
      });
    }
    catch(error:any) {
      console.log(error?.message || error);
      setLoading(false);
      emailErrorToast();
    }
  }

  return (
    <section
    id='contact'
    className='
    flex items-center justify-center
    #md:grid-cols-2
    #bg-yellow-300 mb-10
    bg-slate-50 pt-4
    '
    >
      <div
      className='
      grid place-content-center gap-6
      mb-10 px-4 
      '
      >
        <SectionHead
        title={'Contact me'}
        subTxt={'send me an email! i call you as soon as i can.'}
        />

        <form
        className='
        flex flex-col gap-4
        '
        onSubmit={handleSubmit((d:any) => handSendEmail(d))}
        >
          <InputGroup 
          display={'flex'}
          flexDir={'column'}
          gap={'2px'}
          size='md'>
            <Input
              pr='4.5rem'
              placeholder='Enter your name'
              variant={'filled'}

              {...register('name', {
                required: true,
                validate: {
                  minLength: (v:any) => v.length >= 5,
                  // matchPattern: (v:any) => /^[a-zA-Z0-9_]+$/.test(v),
                },
              })}
              isDisabled={loading}
            />

            <p
            className='text-red-500 text-sm'
            >
              {errors.name?.type === "required" && (
                <small className='block text-red-500 font-bold'>name is required</small>
              )}
              {errors.name?.type === "minLength" && (
                <small className='block text-red-500 font-bold'>The name should have at least 5 characters</small>
              )}

              {/* {errors.name?.type === "matchPattern" && (
                <small className='block text-red-500 font-bold'>name must contain only letters, numbers and _</small>
              )} */}
            </p>
          </InputGroup>
          <InputGroup 
          display={'flex'}
          flexDir={'column'}
          gap={'2px'}
          size='md'>
            <Input
              pr='4.5rem'
              placeholder='Enter your email'
              variant={'filled'}

              {...register('email', {
                required: "Email is required",
                validate: {
                  maxLength: (v) =>
                    v.length <= 50 || "The email should have at most 50 characters",
                  // matchPattern: (v) =>
                  //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  //   "Email address must be a valid address",
                },
              })}
              isDisabled={loading}
            />
            <p
            className='text-red-500 text-sm'
            >
              {errors.email?.message && (
                <small className='block text-red-500 font-bold'>{errors.email.message + ''}</small>
              )}
            </p>
          </InputGroup>
          <InputGroup 
          display={'flex'}
          flexDir={'column'}
          gap={'2px'}
          size='md'>
            <Textarea
              pr='4.5rem'
              placeholder='Enter your message here'
              variant={'filled'}

              {...register('message', {
                required: true,
                validate: {
                  maxLength: (v:any) => v.length <= 400,
                  //matchPattern: (v:any) => /^[a-zA-Z0-9_]+$/.test(v),
                },
              })}
              isDisabled={loading}
            />
            <p
            className='text-red-500 text-sm'
            >
              {errors.message?.type === "required" && (
                <small className='block text-red-500 font-bold'>message is required</small>
              )}
              {errors.message?.type === "maxLength" && (
                <small className='block text-red-500 font-bold'>The message should have at most 400 characters</small>
              )}
            </p>
          </InputGroup>
          <Button
          className='!text-cyan-600'
          rightIcon={<IoMdSend size={24}/>}
          colorScheme='blue'
          variant={'outline'}
          borderRadius={'9999px'}
          alignSelf={'center'}
          type='submit'
          isDisabled={loading}
          isLoading={loading}
          >
            Send
          </Button>
        </form>
      </div>

      {/* loading */}
      {/* {
        !!loading && (
          <div
          className='fixed top-1/2 left-1/2'
          >
            <Spinner size={'xl'}/>
          </div>
        )
      } */}

      {/* toast */}
      <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 6000,
        // style: {
        //   background: '#363636',
        //   color: '#fff',
        // },

        // Default options for specific types
        success: {
          duration: 6000,
          // theme: {
          //   primary: 'green',
          //   secondary: 'black',
          // },
        },
      }}
    />
    </section>
  )
}