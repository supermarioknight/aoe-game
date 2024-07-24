import { Button, Card } from "antd";

type Props = {
    onSort: (order: 'asc' | 'desc') => void;
    onSubmit: () => void;
}

export function Controls({ onSort, onSubmit }: Props) {

    return <Card className="!shadow-md" title="Controls" style={{ minHeight: 300 }}>
        <div id="controls" className="h-full gap-2 flex flex-col items-center justify-center">
            <div id="controls-btns" className="flex items-center space-x-2">
                <Button onClick={() => onSort('asc')}>
                    Sort Asc
                </Button>
                <Button onClick={() => onSort('desc')}>
                    Sort Desc
                </Button>
            </div>
            <Button type="primary" onClick={onSubmit}>
                Submit
            </Button>
        </div>

    </Card>
}