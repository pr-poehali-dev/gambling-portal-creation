import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [betAmount, setBetAmount] = useState<number>(100);
  const [winChance, setWinChance] = useState<number>(50);

  const calculateExpectedValue = () => {
    const payout = betAmount * 2;
    const expectedValue = (winChance / 100) * payout - betAmount;
    return expectedValue.toFixed(2);
  };

  const calculateRiskOfRuin = () => {
    const bankroll = 1000;
    const winProb = winChance / 100;
    const loseProb = 1 - winProb;
    
    if (winProb === 0.5) return 50;
    
    const q = loseProb / winProb;
    const N = bankroll / betAmount;
    const riskOfRuin = Math.pow(q, N) * 100;
    
    return Math.min(riskOfRuin, 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-purple via-background to-dark-purple"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-neon-pink animate-neon-pulse font-['Oswald']">
            VEGAS CASINO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-vegas-gold font-['Montserrat'] font-semibold">
            МАСТЕР АЗАРТНЫХ ИГР
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">Если вам есть 18 и более , то дерзайте</p>
          <Button 
            size="lg" 
            className="bg-vegas-gold text-black hover:bg-vegas-gold/90 text-xl px-8 py-6 animate-vegas-glow font-bold"
          >
            НАЧАТЬ ИГРУ
            <Icon name="Sparkles" className="ml-2" size={24} />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="slots" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card">
            <TabsTrigger value="slots" className="text-lg font-semibold">
              <Icon name="Dices" className="mr-2" size={20} />
              СЛОТЫ
            </TabsTrigger>
            <TabsTrigger value="poker" className="text-lg font-semibold">
              <Icon name="Spade" className="mr-2" size={20} />
              ПОКЕР
            </TabsTrigger>
            <TabsTrigger value="calculator" className="text-lg font-semibold">
              <Icon name="Calculator" className="mr-2" size={20} />
              КАЛЬКУЛЯТОР
            </TabsTrigger>
          </TabsList>

          {/* Slots Section */}
          <TabsContent value="slots">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/img/036c7aaf-991f-48aa-b886-fc738e94d10f.jpg" 
                      alt="Slot Machine" 
                      className="w-16 h-16 rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-2xl text-neon-pink">Слот-машины</CardTitle>
                      <CardDescription className="text-vegas-gold">Понимание механики выигрыша</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Основные стратегии:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Выбирайте слоты с высоким RTP (96%+)</li>
                      <li>• Управляйте банкроллом - ставьте не более 1-2% от капитала</li>
                      <li>• Изучите таблицы выплат перед игрой</li>
                      <li>• Играйте на максимальных линиях для доступа к джекпотам</li>
                      <li>• Устанавливайте лимиты выигрыша и проигрыша</li>
                    </ul>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                      <p className="text-sm">
                        <strong className="text-vegas-gold">Математика слотов:</strong> 
                        RTP 96% означает, что из каждых 100₽ ставок, слот возвращает 96₽ игрокам в долгосрочной перспективе.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-electric-blue">Типы слот-машин</CardTitle>
                  <CardDescription>Выберите подходящий тип игры</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border border-vegas-gold/20">
                      <h4 className="font-semibold text-vegas-gold mb-2">Классические слоты</h4>
                      <p className="text-sm text-muted-foreground">3 барабана, простые правила, RTP 95-98%</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-neon-pink/20">
                      <h4 className="font-semibold text-neon-pink mb-2">Видео слоты</h4>
                      <p className="text-sm text-muted-foreground">5+ барабанов, бонусы, RTP 94-97%</p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-electric-blue/20">
                      <h4 className="font-semibold text-electric-blue mb-2">Прогрессивные джекпоты</h4>
                      <p className="text-sm text-muted-foreground">Накопительные призы, RTP 92-95%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Poker Section */}
          <TabsContent value="poker">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-vegas-gold/30 hover:border-vegas-gold/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/img/ab5e7055-07a2-4d33-a72a-fa2b3bdcf92a.jpg" 
                      alt="Poker Cards" 
                      className="w-16 h-16 rounded-lg"
                    />
                    <div>
                      <CardTitle className="text-2xl text-vegas-gold">Покер Техас Холдем</CardTitle>
                      <CardDescription className="text-neon-pink">Стратегия и тактика</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Базовая стратегия:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-semibold text-vegas-gold mb-2">Премиум руки</h4>
                        <p className="text-sm">AA, KK, QQ, AK</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <h4 className="font-semibold text-neon-pink mb-2">Сильные руки</h4>
                        <p className="text-sm">JJ, TT, AQ, AJ</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Играйте тайтово на ранних позициях</li>
                      <li>• Агрессивно ставьте с сильными руками</li>
                      <li>• Блефуйте с умом и в правильных ситуациях</li>
                      <li>• Изучайте оппонентов и их паттерны</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-neon-pink">Шансы банка</CardTitle>
                  <CardDescription>Математика покера</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-card p-4 rounded-lg border border-vegas-gold/20">
                      <h4 className="font-semibold text-vegas-gold mb-2">Ауты и вероятности</h4>
                      <div className="space-y-2 text-sm">
                        <p>Флеш дро (9 аутов): ~35%</p>
                        <p>Стрит дро (8 аутов): ~31%</p>
                        <p>Пара в сет (2 аута): ~8%</p>
                      </div>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm">
                        <strong className="text-electric-blue">Правило 4-2:</strong> 
                        На флопе умножайте ауты на 4, на терне на 2 для получения приблизительной вероятности.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Calculator Section */}
          <TabsContent value="calculator">
            <div className="max-w-4xl mx-auto">
              <Card className="border-electric-blue/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl text-electric-blue">Калькулятор вероятностей</CardTitle>
                  <CardDescription className="text-lg">Рассчитайте математическое ожидание и риски</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="bet" className="text-lg font-semibold text-vegas-gold">Размер ставки (₽)</Label>
                        <Input
                          id="bet"
                          type="number"
                          value={betAmount}
                          onChange={(e) => setBetAmount(Number(e.target.value))}
                          className="mt-2 text-lg"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="chance" className="text-lg font-semibold text-neon-pink">Шанс выигрыша (%)</Label>
                        <Input
                          id="chance"
                          type="number"
                          value={winChance}
                          onChange={(e) => setWinChance(Number(e.target.value))}
                          className="mt-2 text-lg"
                          min="0"
                          max="100"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="bg-gradient-to-r from-vegas-gold/10 to-neon-pink/10 border-vegas-gold/30">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-vegas-gold mb-4">Результаты расчёта</h3>
                          
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-foreground">Мат. ожидание:</span>
                              <span className={`text-xl font-bold ${parseFloat(calculateExpectedValue()) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {calculateExpectedValue()}₽
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-foreground">Риск разорения:</span>
                              <span className="text-xl font-bold text-neon-pink">
                                {calculateRiskOfRuin()}%
                              </span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-foreground">Выплата при выигрыше:</span>
                              <span className="text-xl font-bold text-electric-blue">
                                {betAmount * 2}₽
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-muted rounded-lg">
                            <p className="text-sm text-center">
                              {parseFloat(calculateExpectedValue()) >= 0 
                                ? "✅ Положительное мат. ожидание - выгодная ставка"
                                : "❌ Отрицательное мат. ожидание - невыгодная ставка"
                              }
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tips Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-pink font-['Oswald']">
            ЗОЛОТЫЕ ПРАВИЛА КАЗИНО
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-vegas-gold/30 hover:border-vegas-gold/60 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon name="DollarSign" size={48} className="mx-auto mb-4 text-vegas-gold" />
                <h3 className="text-xl font-bold mb-3 text-vegas-gold">Управление банкроллом</h3>
                <p className="text-muted-foreground">
                  Никогда не ставьте больше 5% от общего капитала на одну игру. 
                  Это основа долгосрочной игры.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neon-pink/30 hover:border-neon-pink/60 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon name="Brain" size={48} className="mx-auto mb-4 text-neon-pink" />
                <h3 className="text-xl font-bold mb-3 text-neon-pink">Изучайте математику</h3>
                <p className="text-muted-foreground">
                  Понимание вероятностей и математического ожидания - 
                  ключ к принятию правильных решений.
                </p>
              </CardContent>
            </Card>

            <Card className="border-electric-blue/30 hover:border-electric-blue/60 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Icon name="Clock" size={48} className="mx-auto mb-4 text-electric-blue" />
                <h3 className="text-xl font-bold mb-3 text-electric-blue">Контроль времени</h3>
                <p className="text-muted-foreground">
                  Устанавливайте временные лимиты. Усталость приводит к 
                  плохим решениям и потерям.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;