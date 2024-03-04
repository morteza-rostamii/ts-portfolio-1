import { Avatar, Button, FormLabel, Image, Input, Textarea } from "@chakra-ui/react";
import useProfileHook from "./useProfileHook";


const UserProfile = () => {
  const {
    name, 
    setName,
    description,
    setDescription,
    handAddUser,
  } = useProfileHook();

  return (
    <div
    className="
    grid place-content-center h-full
    "
    >
      <div
      className="
      flex
      bg-white shadow-md #p-4 rounded-md
      "
      >
        <div
        className="
        flex flex-col gap-4 items-center bg-slate-50
        p-4 flex-1 basis-1/2 w-[50%]
        "
        >
          <Avatar
          src="https://placehold.co/400x400/lightblue/black"
          size={'xl'}
          />

          <Button
          variant={'outline'}
          >
            Edit picture
          </Button>

          <div
          className="text-center"
          >
            <h2>
              {name ? name : 'your name here.'}
            </h2>
            <p
            className="
            max-w-[150px]
            "
            >
              {description ? description : 'description here.'}
            </p>
          </div>
        </div>     
        
        <form
        className="
        flex flex-col gap-4 p-4 flex-1 basis-1/2
        "
        onSubmit={handAddUser}
        >
          <div>
            <label htmlFor="name">
              name
            </label>
            <Input 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">
              description
            </label>
            <Textarea
            id="description"
            //value={description}
            placeholder={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
          variant={'outline'}
          type="submit"
          >
            update profile
          </Button>
        </form>
      </div>
    </div>
  )
}

export default UserProfile