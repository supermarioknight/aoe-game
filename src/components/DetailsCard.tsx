import { Card } from "antd";
import { Player } from "../interfaces/Player.interface"

type Props = {
    player: Player | null;
}
export function DetailsCard({ player }: Props) {

    return <Card title="Details" bordered={false} style={{ minHeight: 300 }}>
        {player ? <div>
            Players Detail
        </div> : null}
    </Card>

}