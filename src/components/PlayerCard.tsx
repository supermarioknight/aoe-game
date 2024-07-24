import Paragraph from "antd/es/typography/Paragraph";
import { Player } from "../interfaces/Player.interface"

type Props = {
    player: Player;
}
export function PlayerCard({ player }: Props) {
    return <div id="player-card" className="w-32 border p-3 rounded-md shadow-md">
        <Paragraph
            ellipsis={{
                rows: 1,
                expandable: false,
            }}
        >{player.realName}</Paragraph>
        <Paragraph
            ellipsis={{
                rows: 1,
                expandable: false,
            }}
        >{player.playerName}</Paragraph>
        <Paragraph
            ellipsis={{
                rows: 1,
                expandable: false,
            }}>{player.asset}</Paragraph>
    </div>
}