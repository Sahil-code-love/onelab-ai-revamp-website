import React from 'react';
import { Card } from './ui/card';
import { CheckCircle, ArrowRight, AlertTriangle, Lightbulb } from 'lucide-react';

interface DecisionTreeFlowProps {
  challengesSolutionsResults: Array<{
    challenge: string;
    solution: string;
    result: string;
  }>;
}

const DecisionTreeFlow: React.FC<DecisionTreeFlowProps> = ({ challengesSolutionsResults }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="space-y-8">
        {challengesSolutionsResults.map((item, index) => (
          <div key={index} className="relative">
            {/* Flow Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-center">
              
              {/* Challenge Card */}
              <div className="relative group">
                <Card className="h-32 p-4 bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-950/20 dark:to-red-900/10 border-red-200/60 dark:border-red-800/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start space-x-3 h-full">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">
                        Challenge {index + 1}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {/* Animated Arrow - Desktop */}
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center animate-pulse">
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                  <div className="absolute top-1/2 left-6 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 transform -translate-y-1/2"></div>
                </div>
                
                {/* Animated Arrow - Mobile */}
                <div className="lg:hidden flex justify-center mt-3 mb-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center animate-pulse mb-1">
                      <ArrowRight className="w-3 h-3 text-primary rotate-90" />
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-primary/60 to-primary/20"></div>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div className="relative group">
                <Card className="h-32 p-4 bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200/60 dark:border-blue-800/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start space-x-3 h-full">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2 uppercase tracking-wide">
                        AI Solution
                      </div>
                      <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </Card>
                
                {/* Animated Arrow - Desktop */}
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-background border-2 border-green-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <ArrowRight className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="absolute top-1/2 left-6 w-8 h-0.5 bg-gradient-to-r from-green-500/60 to-green-500/20 transform -translate-y-1/2"></div>
                </div>
                
                {/* Animated Arrow - Mobile */}
                <div className="lg:hidden flex justify-center mt-3 mb-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-background border-2 border-green-500/30 rounded-full flex items-center justify-center animate-pulse mb-1">
                      <ArrowRight className="w-3 h-3 text-green-600 rotate-90" />
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-green-500/60 to-green-500/20"></div>
                  </div>
                </div>
              </div>

              {/* Result Card */}
              <div className="relative group">
                <Card className="h-32 p-4 bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 border-green-200/60 dark:border-green-800/40 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start space-x-3 h-full">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2 uppercase tracking-wide">
                        Result Achieved
                      </div>
                      <p className="text-sm text-foreground leading-relaxed font-medium line-clamp-3">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Connecting Line Between Rows - Desktop Only */}
            {index < challengesSolutionsResults.length - 1 && (
              <div className="hidden lg:block absolute left-1/2 -bottom-4 transform -translate-x-1/2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecisionTreeFlow;