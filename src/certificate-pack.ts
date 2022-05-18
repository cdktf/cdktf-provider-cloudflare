// https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#certificate_authority CertificatePack#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}
  */
  readonly cloudflareBranding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#hosts CertificatePack#hosts}
  */
  readonly hosts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#type CertificatePack#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#validation_method CertificatePack#validation_method}
  */
  readonly validationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#validity_days CertificatePack#validity_days}
  */
  readonly validityDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#wait_for_active_status CertificatePack#wait_for_active_status}
  */
  readonly waitForActiveStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#zone_id CertificatePack#zone_id}
  */
  readonly zoneId: string;
  /**
  * validation_errors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#validation_errors CertificatePack#validation_errors}
  */
  readonly validationErrors?: CertificatePackValidationErrors[] | cdktf.IResolvable;
  /**
  * validation_records block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#validation_records CertificatePack#validation_records}
  */
  readonly validationRecords?: CertificatePackValidationRecords[] | cdktf.IResolvable;
}
export interface CertificatePackValidationErrors {
}

export function certificatePackValidationErrorsToTerraform(struct?: CertificatePackValidationErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface CertificatePackValidationRecords {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#cname_name CertificatePack#cname_name}
  */
  readonly cnameName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#cname_target CertificatePack#cname_target}
  */
  readonly cnameTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#emails CertificatePack#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#http_body CertificatePack#http_body}
  */
  readonly httpBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#http_url CertificatePack#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#txt_name CertificatePack#txt_name}
  */
  readonly txtName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack#txt_value CertificatePack#txt_value}
  */
  readonly txtValue?: string;
}

export function certificatePackValidationRecordsToTerraform(struct?: CertificatePackValidationRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname_name: cdktf.stringToTerraform(struct!.cnameName),
    cname_target: cdktf.stringToTerraform(struct!.cnameTarget),
    emails: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emails),
    http_body: cdktf.stringToTerraform(struct!.httpBody),
    http_url: cdktf.stringToTerraform(struct!.httpUrl),
    txt_name: cdktf.stringToTerraform(struct!.txtName),
    txt_value: cdktf.stringToTerraform(struct!.txtValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack cloudflare_certificate_pack}
*/
export class CertificatePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_certificate_pack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/r/certificate_pack cloudflare_certificate_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatePackConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatePackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_certificate_pack',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthority = config.certificateAuthority;
    this._cloudflareBranding = config.cloudflareBranding;
    this._hosts = config.hosts;
    this._type = config.type;
    this._validationMethod = config.validationMethod;
    this._validityDays = config.validityDays;
    this._waitForActiveStatus = config.waitForActiveStatus;
    this._zoneId = config.zoneId;
    this._validationErrors = config.validationErrors;
    this._validationRecords = config.validationRecords;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: true, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // cloudflare_branding - computed: false, optional: true, required: false
  private _cloudflareBranding?: boolean | cdktf.IResolvable; 
  public get cloudflareBranding() {
    return this.getBooleanAttribute('cloudflare_branding');
  }
  public set cloudflareBranding(value: boolean | cdktf.IResolvable) {
    this._cloudflareBranding = value;
  }
  public resetCloudflareBranding() {
    this._cloudflareBranding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareBrandingInput() {
    return this._cloudflareBranding;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // validation_method - computed: false, optional: true, required: false
  private _validationMethod?: string; 
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  public resetValidationMethod() {
    this._validationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod;
  }

  // validity_days - computed: false, optional: true, required: false
  private _validityDays?: number; 
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
  public set validityDays(value: number) {
    this._validityDays = value;
  }
  public resetValidityDays() {
    this._validityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityDaysInput() {
    return this._validityDays;
  }

  // wait_for_active_status - computed: false, optional: true, required: false
  private _waitForActiveStatus?: boolean | cdktf.IResolvable; 
  public get waitForActiveStatus() {
    return this.getBooleanAttribute('wait_for_active_status');
  }
  public set waitForActiveStatus(value: boolean | cdktf.IResolvable) {
    this._waitForActiveStatus = value;
  }
  public resetWaitForActiveStatus() {
    this._waitForActiveStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForActiveStatusInput() {
    return this._waitForActiveStatus;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // validation_errors - computed: false, optional: true, required: false
  private _validationErrors?: CertificatePackValidationErrors[] | cdktf.IResolvable; 
  public get validationErrors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('validation_errors');
  }
  public set validationErrors(value: CertificatePackValidationErrors[] | cdktf.IResolvable) {
    this._validationErrors = value;
  }
  public resetValidationErrors() {
    this._validationErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationErrorsInput() {
    return this._validationErrors;
  }

  // validation_records - computed: false, optional: true, required: false
  private _validationRecords?: CertificatePackValidationRecords[] | cdktf.IResolvable; 
  public get validationRecords() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('validation_records');
  }
  public set validationRecords(value: CertificatePackValidationRecords[] | cdktf.IResolvable) {
    this._validationRecords = value;
  }
  public resetValidationRecords() {
    this._validationRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRecordsInput() {
    return this._validationRecords;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
      hosts: cdktf.listMapper(cdktf.stringToTerraform)(this._hosts),
      type: cdktf.stringToTerraform(this._type),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      validity_days: cdktf.numberToTerraform(this._validityDays),
      wait_for_active_status: cdktf.booleanToTerraform(this._waitForActiveStatus),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      validation_errors: cdktf.listMapper(certificatePackValidationErrorsToTerraform)(this._validationErrors),
      validation_records: cdktf.listMapper(certificatePackValidationRecordsToTerraform)(this._validationRecords),
    };
  }
}
