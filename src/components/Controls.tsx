import { Button, Card } from 'antd';

type Props = {
  order: 'asc' | 'desc';
  onSort: (order: 'asc' | 'desc') => void;
  onSubmit: () => void;
};

export function Controls({ onSort, onSubmit, order }: Props) {
  return (
    <Card className="!shadow-md" title="Controls" style={{ minHeight: 300 }}>
      <div id="controls" className="h-full gap-2 flex flex-col items-center justify-center">
        <div id="controls-btns" className="flex items-center space-x-2">
          <Button type={order === 'asc' ? 'primary' : undefined} onClick={() => onSort('asc')}>
            Sort Asc
          </Button>
          <Button type={order === 'desc' ? 'primary' : undefined} onClick={() => onSort('desc')}>
            Sort Desc
          </Button>
        </div>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </Card>
  );
}
