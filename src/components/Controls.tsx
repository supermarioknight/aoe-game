import { Button, Card } from "antd";

export function Controls() {

    return <Card className="!shadow-md" title="Controls" style={{ minHeight: 300 }}>
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