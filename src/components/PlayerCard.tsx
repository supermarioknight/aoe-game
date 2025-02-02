import Paragraph from 'antd/es/typography/Paragraph';
import { Player } from '../interfaces/Player.interface';

type Props = {
  player: Player;
  isActive?: boolean;
} & React.ComponentProps<'div'>;
export function PlayerCard({ player, isActive, ...props }: Props) {
  return (
    <div
      id="player-card"
      className={`w-40 border p-3 rounded-md shadow-md hover:cursor-pointer hover:bg-gray-100 ${isActive ? 'bg-gray-100' : ''}`}
      {...props}
    >
      <Paragraph
        ellipsis={{
          rows: 1,
          expandable: false,
        }}
      >
        {player.realName}
      </Paragraph>
      <Paragraph
        ellipsis={{
          rows: 1,
          expandable: false,
        }}
      >
        {player.playerName}
      </Paragraph>
      <Paragraph
        ellipsis={{
          rows: 1,
          expandable: false,
        }}
      >
        {player.asset}
      </Paragraph>
    </div>
  );
}
