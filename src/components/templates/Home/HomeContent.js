import StoryBox from "./StoryBox";


export default function HomeContent() {
  return <div className="w-1/2">
    <div className="flex items-center justify-between gap-x-4">
        <StoryBox href={'/images/story-1.jpg'} avatar={'/images/profile-13.jpg'}/>
        <StoryBox href={'/images/story-2.jpg'} avatar={'/images/profile-2.jpg'}/>
        <StoryBox href={'/images/story-3.jpg'} avatar={'/images/profile-3.jpg'}/>
        <StoryBox href={'/images/story-4.jpg'} avatar={'/images/profile-4.jpg'}/>
        <StoryBox href={'/images/story-5.jpg'} avatar={'/images/profile-5.jpg'}/>
    </div>
  </div>;
}
