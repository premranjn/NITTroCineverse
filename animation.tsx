import { Avatar } from "@hiber3d/hdk-react-components";
import { Animation, Prefab } from "@hiber3d/hdk-react";

const CustomAvatar = () => (
    <>
        {/* blue red tshirt */}
        <Animation animation={{ x:[110,110,110,170,170,170,170,110], y:[0,0,0,0,0,0,0,0], z:[-170,170,170,170,170,-170,-170,-170], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[112,112,112,172,172,172,172,112], y:[0,0,0,0,0,0,0,0], z:[-172,168,168,168,168,-172,-172,-172], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[-105,-105,-105,-105,-170,-170,-170,-105], y:[0,0,0,0,0,0,0,0], z:[-170,170,170,170,170,-170,-170,-170], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[-107,-107,-107,-107,-168,-168,-168,-107], y:[0,0,0,0,0,0,0,0], z:[-172,168,168,168,168,-172,-172,-172], rotY:[0,0,90,90,180,180,270,270], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Animation animation={{ x:[-170,170,170,170,170,-170,-170,-170], y:[0,0,0,0,0,0,0,0], z:[-105,-105,-105,-105,-40,-40,-40,-105], rotY:[90,90,180,180,270,270,0,0], duration:530, steps:[0,0.43,0.43,0.5,0.5,0.93,0.93,1], loop:'RESTART', easing:'LINEAR' }}>
            <Avatar animation = 'an_default_walk' scale={1} />
        </Animation>
        <Avatar animation={'an_default_emote_breakdance_ready_01'} scale={1} x={57} y={0} z={-170} rotY={225} />
        <Avatar animation={'an_default_emote_breakdance_ready_01'} scale={1} x={56} y={0} z={-170} rotY={135} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={28} y={0} z={-114} rotY={285} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={26} y={0} z={-114} rotY={45} />
        <Avatar animation={'an_default_emote_talking_01'} scale={1} x={27} y={0} z={-112} rotY={150} />
        <Prefab id='radio_01' x={57} y={0} z={-168} rotY={200}/>
    </>
);

export default CustomAvatar;


