import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";
import {
  checkBudgetAlerts,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransactions,
} from "@/lib/inngest/function";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    processRecurringTransaction,
    triggerRecurringTransactions,
    checkBudgetAlerts,
    generateMonthlyReports,
  ],
});
