import { Player } from "../interfaces/Player.interface"

type Props = {
    player: Player;
}
export function PlayerCard({ player }: Props) {
    return <div id="player-card" className="w-60 border">
        Player Card
    </div>
}