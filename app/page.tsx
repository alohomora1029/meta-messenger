import { getServerSession } from 'next-auth/next';
import { Message } from '../typings';
import ChatInput from './ChatInput'
import MessegeList from './MessageList'


async function Homepage() {
  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then((res) => res.json());
  const messages :Message[] = data.messages;
  const session = await getServerSession();
  
  return (
    <> 
    <main>
      <MessegeList initialMessages = {messages}/>
      <ChatInput />
    </main>
    </>
  )
}

export default Homepage