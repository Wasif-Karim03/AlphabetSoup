import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export function AdmissionsInfo() {
  return (
    <Card className="bg-muted/50 border-amber-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <CardTitle className="text-lg">Admissions Information</CardTitle>
        </div>
        <CardDescription>
          Please read the following important information before enrolling your child.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <p className="font-semibold mb-2">Parental Consent Required:</p>
          <p className="text-muted-foreground">
            Students under 18 must have parental consent and guardian involvement. A parent or guardian must be present during enrollment and sign all necessary documents.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Medical Information:</p>
          <p className="text-muted-foreground">
            Please inform us of any medical conditions, allergies, or special requirements. All students must be physically fit to participate in cricket training.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Safety First:</p>
          <p className="text-muted-foreground">
            We maintain strict safety protocols. All equipment is regularly inspected and safety gear is mandatory during practice and matches.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
