
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Music, BookOpen, Target, Mail, Heart, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Supabase integration
      console.log('Submitting waitlist form:', { email, targetLanguage });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: "Welcome to Lody! 🎶",
        description: "You're on the waitlist! Check your email for confirmation.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-lody-cream via-lody-mint to-lody-aqua flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="text-6xl mb-6 animate-float">🎉</div>
          <h1 className="font-josefin font-bold text-3xl text-gray-800 mb-4">
            You're in! 🎶
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to the Lody family! We'll send you updates as we get closer to launch.
          </p>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700 mb-2">Share with friends:</p>
            <div className="flex items-center gap-2 p-2 bg-white rounded border">
              <input
                type="text"
                value="lody.app/waitlist?ref=your-code"
                readOnly
                className="flex-1 text-sm bg-transparent border-none outline-none"
              />
              <Button size="sm" variant="outline">Copy</Button>
            </div>
          </div>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="font-josefin"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lody-cream via-lody-mint to-lody-aqua font-josefin">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center p-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Music className="w-4 h-4 text-lody-teal" />
              <span className="text-sm font-medium text-gray-700">Coming Soon</span>
            </div>
            <h1 className="font-bold text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
              Learn Languages
              <br />
              <span className="bg-gradient-to-r from-lody-teal to-purple-600 bg-clip-text text-transparent">
                Through Music
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your daily language vitamin with curated songs, smart vocab, and listening streaks.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="font-josefin font-semibold text-lg px-8 py-4 bg-gradient-to-r from-lody-teal to-purple-600 hover:from-lody-teal/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist 🎵
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-800 mb-8">
              Your Daily Language Vitamin
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Forget boring textbooks and endless grammar drills. Lody makes language learning feel like discovering your new favorite playlist. Each day, we serve up bite-sized lessons wrapped in the universal language of music – because the best learning happens when you don't even realize you're studying.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={itemVariants} className="font-bold text-4xl md:text-5xl text-gray-800 text-center mb-16">
            How Lody Works
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-lody-teal to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Daily Song Drops</h3>
                  <p className="text-gray-600">
                    Discover new music while learning. Each song is carefully curated to match your level and interests.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Smart Vocab</h3>
                  <p className="text-gray-600">
                    Learn words in context. Our AI highlights key vocabulary and phrases that stick in your memory.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-lody-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-4">Listening Streaks</h3>
                  <p className="text-gray-600">
                    Build habits that last. Track your progress and maintain momentum with personalized streaks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Waitlist Form Section */}
      <motion.section
        id="waitlist"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-4"
      >
        <div className="max-w-md mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-800 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-lg text-gray-600">
              Be the first to know when Lody launches. No spam, just music and language learning magic.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-white/70 border-gray-200 focus:border-lody-teal focus:ring-lody-teal"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language" className="text-gray-700 font-medium">
                      Which language interests you most?
                    </Label>
                    <Select value={targetLanguage} onValueChange={setTargetLanguage}>
                      <SelectTrigger className="bg-white/70 border-gray-200 focus:border-lody-teal focus:ring-lody-teal">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-sm">
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="portuguese">Portuguese</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                        <SelectItem value="korean">Korean</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-josefin font-semibold bg-gradient-to-r from-lody-teal to-purple-600 hover:from-lody-teal/90 hover:to-purple-600/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Waitlist 🎶'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-12 px-4 text-center"
      >
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-lody-teal" />
            <span className="text-gray-600">Made with love for language learners</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Lody. All rights reserved.
          </p>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default Index;
