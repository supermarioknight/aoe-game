import { Card } from 'antd';
import { Player } from '../interfaces/Player.interface';
import Paragraph from 'antd/es/typography/Paragraph';

type Props = {
  player: Player | null;
};
export function DetailsCard({ player }: Props) {
  return (
    <Card className="!shadow-md" title="Details" style={{ minHeight: 300 }}>
      {player ? (
        <div>
          <Paragraph>{player.realName}</Paragraph>
          <Paragraph>{player.playerName}</Paragraph>
          <Paragraph>{player.asset}</Paragraph>
        </div>
      ) : null}
    </Card>
  );
}
