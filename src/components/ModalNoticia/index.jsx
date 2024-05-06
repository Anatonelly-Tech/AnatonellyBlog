import * as Dialog from '@radix-ui/react-dialog';

export default ({ item }) => (
  <Dialog.Portal>
    <Dialog.Overlay className='bg-black/20 fixed inset-0' />
    <Dialog.Content className='flex flex-col w-2/3 h-3/4 overflow-y-auto rounded bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex h-32 w-full bg-black'>
        <img
          className='w-full h-32 object-cover opacity-50'
          src={item.imageUrl}
          alt=''
          draggable='false'
        />
      </div>
      <div className='flex flex-col p-4 gap-4'>
        <h2 className='font-black text-4xl'>{item.title}</h2>
        <p className='font-semibold text-2xl text-black/60'>{item.subtitle}</p>
        <p className='font-semibold text-2xl text-black/60 whitespace-break-spaces'>
          {item.description}
        </p>
      </div>
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Portal>
);
