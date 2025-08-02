import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Edge,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card } from './ui/card';
import { CheckCircle } from 'lucide-react';

interface DecisionTreeFlowProps {
  challengesSolutionsResults: Array<{
    challenge: string;
    solution: string;
    result: string;
  }>;
}

const DecisionTreeFlow: React.FC<DecisionTreeFlowProps> = ({ challengesSolutionsResults }) => {
  // Create nodes and edges from the data
  const createNodes = () => {
    const nodes = [];
    const nodeSpacing = 280;
    const verticalSpacing = 180;
    
    challengesSolutionsResults.forEach((item, index) => {
      const yPosition = index * verticalSpacing;
      
      // Challenge node
      nodes.push({
        id: `challenge-${index}`,
        type: 'default',
        position: { x: 0, y: yPosition },
        data: { 
          label: (
            <div className="w-60 p-3 text-left">
              <div className="text-xs font-semibold text-destructive mb-1 uppercase tracking-wide">
                Challenge {index + 1}
              </div>
              <div className="text-sm text-foreground leading-relaxed">
                {item.challenge}
              </div>
            </div>
          )
        },
        style: {
          background: 'hsl(var(--destructive) / 0.05)',
          border: '2px solid hsl(var(--destructive) / 0.3)',
          borderRadius: '8px',
          width: 'auto',
          height: 'auto',
        },
      });
      
      // Solution node
      nodes.push({
        id: `solution-${index}`,
        type: 'default',
        position: { x: nodeSpacing, y: yPosition },
        data: { 
          label: (
            <div className="w-60 p-3 text-left">
              <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                AI Solution
              </div>
              <div className="text-sm text-foreground leading-relaxed">
                {item.solution}
              </div>
            </div>
          )
        },
        style: {
          background: 'hsl(var(--primary) / 0.05)',
          border: '2px solid hsl(var(--primary) / 0.3)',
          borderRadius: '8px',
          width: 'auto',
          height: 'auto',
        },
      });
      
      // Result node
      nodes.push({
        id: `result-${index}`,
        type: 'default',
        position: { x: nodeSpacing * 2, y: yPosition },
        data: { 
          label: (
            <div className="w-60 p-3 text-left">
              <div className="flex items-center mb-1">
                <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                  Result Achieved
                </div>
              </div>
              <div className="text-sm text-foreground leading-relaxed font-medium">
                {item.result}
              </div>
            </div>
          )
        },
        style: {
          background: 'hsl(142 76% 36% / 0.05)',
          border: '2px solid hsl(142 76% 36% / 0.3)',
          borderRadius: '8px',
          width: 'auto',
          height: 'auto',
        },
      });
    });
    
    return nodes;
  };
  
  const createEdges = () => {
    const edges: Edge[] = [];
    
    challengesSolutionsResults.forEach((_, index) => {
      // Challenge to Solution
      edges.push({
        id: `e-challenge-solution-${index}`,
        source: `challenge-${index}`,
        target: `solution-${index}`,
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: 'hsl(var(--primary))',
          strokeWidth: 2,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'hsl(var(--primary))',
        },
      });
      
      // Solution to Result
      edges.push({
        id: `e-solution-result-${index}`,
        source: `solution-${index}`,
        target: `result-${index}`,
        type: 'smoothstep',
        animated: true,
        style: { 
          stroke: 'hsl(142 76% 36%)',
          strokeWidth: 2,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'hsl(142 76% 36%)',
        },
      });
    });
    
    return edges;
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(createNodes());
  const [edges, setEdges, onEdgesChange] = useEdgesState(createEdges());

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full" style={{ height: `${Math.max(600, challengesSolutionsResults.length * 180 + 100)}px` }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{
          padding: 0.1,
          includeHiddenNodes: false,
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        style={{ 
          backgroundColor: 'transparent',
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background 
          variant={BackgroundVariant.Lines}
          gap={20} 
          size={1} 
          color="hsl(var(--border))"
          style={{ opacity: 0.3 }}
        />
      </ReactFlow>
    </div>
  );
};

export default DecisionTreeFlow;