import { Button, Card } from 'antd';

type Props = {
  order: 'asc' | 'desc';
  onSort: (order: 'asc' | 'desc') => void;
  onSubmit: () => void;
};

export function Controls({ onSort, onSubmit, order }: Props) {
  return (
    <Card className="!shadow-md" title="Controls" style={{ minHeight: 300 }}>
      <div id="controls" className="h-full gap-2 flex flex-col items-center justify-center w-52 mx-auto">
        <div id="controls-btns" className="flex items-center justify-between w-full mb-4">
          <Button type={order === 'asc' ? 'primary' : undefined} onClick={() => onSort('asc')}>
            SORT ASC
          </Button>
          <Button type={order === 'desc' ? 'primary' : undefined} onClick={() => onSort('desc')}>
            SORT DESC
          </Button>
        </div>
        <Button type="primary" onClick={onSubmit} block>
          SUBMIT
        </Button>
      </div>
    </Card>
  );
}
