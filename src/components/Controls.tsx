import { Button, Card } from "antd";

export function Controls() {

    return <Card title="Controls" bordered={false} style={{ height: 300 }}>
        <div id="controls" className="h-full gap-2 flex flex-col items-center justify-center">
            <div id="controls-btns" className="flex items-center space-x-2">
                <Button>
                    Sort Asc
                </Button>
                <Button>
                    Sort Desc
                </Button>
            </div>
            <Button type="primary">
                Submit
            </Button>
        </div>

    </Card>
}