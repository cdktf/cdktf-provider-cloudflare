// https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatePackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which certificate authority to issue the certificate pack. Available values: `digicert`, `lets_encrypt`, `google`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}
  */
  readonly certificateAuthority: string;
  /**
  * Whether or not to include Cloudflare branding. This will add `sni.cloudflaressl.com` as the Common Name if set to `true`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}
  */
  readonly cloudflareBranding?: boolean | cdktf.IResolvable;
  /**
  * List of hostnames to provision the certificate pack for. The zone name must be included as a host. Note: If using Let's Encrypt, you cannot use individual subdomains and only a wildcard for subdomain is available. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#hosts CertificatePack#hosts}
  */
  readonly hosts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#id CertificatePack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Certificate pack configuration type. Available values: `advanced`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#type CertificatePack#type}
  */
  readonly type: string;
  /**
  * Which validation method to use in order to prove domain ownership. Available values: `txt`, `http`, `email`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}
  */
  readonly validationMethod: string;
  /**
  * How long the certificate is valid for. Note: If using Let's Encrypt, this value can only be 90 days. Available values: `14`, `30`, `90`, `365`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}
  */
  readonly validityDays: number;
  /**
  * Whether or not to wait for a certificate pack to reach status `active` during creation. Defaults to `false`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#wait_for_active_status CertificatePack#wait_for_active_status}
  */
  readonly waitForActiveStatus?: boolean | cdktf.IResolvable;
  /**
  * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}
  */
  readonly zoneId: string;
  /**
  * validation_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#validation_errors CertificatePack#validation_errors}
  */
  readonly validationErrors?: CertificatePackValidationErrors[] | cdktf.IResolvable;
  /**
  * validation_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#validation_records CertificatePack#validation_records}
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


export function certificatePackValidationErrorsToHclTerraform(struct?: CertificatePackValidationErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificatePackValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificatePackValidationErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatePackValidationErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class CertificatePackValidationErrorsList extends cdktf.ComplexList {
  public internalValue? : CertificatePackValidationErrors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertificatePackValidationErrorsOutputReference {
    return new CertificatePackValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificatePackValidationRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#cname_name CertificatePack#cname_name}
  */
  readonly cnameName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#cname_target CertificatePack#cname_target}
  */
  readonly cnameTarget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#emails CertificatePack#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#http_body CertificatePack#http_body}
  */
  readonly httpBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#http_url CertificatePack#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#txt_name CertificatePack#txt_name}
  */
  readonly txtName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#txt_value CertificatePack#txt_value}
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
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    http_body: cdktf.stringToTerraform(struct!.httpBody),
    http_url: cdktf.stringToTerraform(struct!.httpUrl),
    txt_name: cdktf.stringToTerraform(struct!.txtName),
    txt_value: cdktf.stringToTerraform(struct!.txtValue),
  }
}


export function certificatePackValidationRecordsToHclTerraform(struct?: CertificatePackValidationRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname_name: {
      value: cdktf.stringToHclTerraform(struct!.cnameName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname_target: {
      value: cdktf.stringToHclTerraform(struct!.cnameTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_body: {
      value: cdktf.stringToHclTerraform(struct!.httpBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_url: {
      value: cdktf.stringToHclTerraform(struct!.httpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    txt_name: {
      value: cdktf.stringToHclTerraform(struct!.txtName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    txt_value: {
      value: cdktf.stringToHclTerraform(struct!.txtValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificatePackValidationRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificatePackValidationRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cnameName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameName = this._cnameName;
    }
    if (this._cnameTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameTarget = this._cnameTarget;
    }
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._httpBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBody = this._httpBody;
    }
    if (this._httpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUrl = this._httpUrl;
    }
    if (this._txtName !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtName = this._txtName;
    }
    if (this._txtValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtValue = this._txtValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificatePackValidationRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cnameName = undefined;
      this._cnameTarget = undefined;
      this._emails = undefined;
      this._httpBody = undefined;
      this._httpUrl = undefined;
      this._txtName = undefined;
      this._txtValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cnameName = value.cnameName;
      this._cnameTarget = value.cnameTarget;
      this._emails = value.emails;
      this._httpBody = value.httpBody;
      this._httpUrl = value.httpUrl;
      this._txtName = value.txtName;
      this._txtValue = value.txtValue;
    }
  }

  // cname_name - computed: true, optional: true, required: false
  private _cnameName?: string; 
  public get cnameName() {
    return this.getStringAttribute('cname_name');
  }
  public set cnameName(value: string) {
    this._cnameName = value;
  }
  public resetCnameName() {
    this._cnameName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameNameInput() {
    return this._cnameName;
  }

  // cname_target - computed: true, optional: true, required: false
  private _cnameTarget?: string; 
  public get cnameTarget() {
    return this.getStringAttribute('cname_target');
  }
  public set cnameTarget(value: string) {
    this._cnameTarget = value;
  }
  public resetCnameTarget() {
    this._cnameTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameTargetInput() {
    return this._cnameTarget;
  }

  // emails - computed: true, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // http_body - computed: true, optional: true, required: false
  private _httpBody?: string; 
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }
  public set httpBody(value: string) {
    this._httpBody = value;
  }
  public resetHttpBody() {
    this._httpBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBodyInput() {
    return this._httpBody;
  }

  // http_url - computed: true, optional: true, required: false
  private _httpUrl?: string; 
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
  public set httpUrl(value: string) {
    this._httpUrl = value;
  }
  public resetHttpUrl() {
    this._httpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
  }

  // txt_name - computed: true, optional: true, required: false
  private _txtName?: string; 
  public get txtName() {
    return this.getStringAttribute('txt_name');
  }
  public set txtName(value: string) {
    this._txtName = value;
  }
  public resetTxtName() {
    this._txtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtNameInput() {
    return this._txtName;
  }

  // txt_value - computed: true, optional: true, required: false
  private _txtValue?: string; 
  public get txtValue() {
    return this.getStringAttribute('txt_value');
  }
  public set txtValue(value: string) {
    this._txtValue = value;
  }
  public resetTxtValue() {
    this._txtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtValueInput() {
    return this._txtValue;
  }
}

export class CertificatePackValidationRecordsList extends cdktf.ComplexList {
  public internalValue? : CertificatePackValidationRecords[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertificatePackValidationRecordsOutputReference {
    return new CertificatePackValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack cloudflare_certificate_pack}
*/
export class CertificatePack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_certificate_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificatePack to import
  * @param importFromId The id of the existing CertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificatePack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/certificate_pack cloudflare_certificate_pack} Resource
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
        providerVersion: '4.23.0',
        providerVersionConstraint: '~> 4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateAuthority = config.certificateAuthority;
    this._cloudflareBranding = config.cloudflareBranding;
    this._hosts = config.hosts;
    this._id = config.id;
    this._type = config.type;
    this._validationMethod = config.validationMethod;
    this._validityDays = config.validityDays;
    this._waitForActiveStatus = config.waitForActiveStatus;
    this._zoneId = config.zoneId;
    this._validationErrors.internalValue = config.validationErrors;
    this._validationRecords.internalValue = config.validationRecords;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: false, required: true
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // validation_method - computed: false, optional: false, required: true
  private _validationMethod?: string; 
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod;
  }

  // validity_days - computed: false, optional: false, required: true
  private _validityDays?: number; 
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
  public set validityDays(value: number) {
    this._validityDays = value;
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
  private _validationErrors = new CertificatePackValidationErrorsList(this, "validation_errors", false);
  public get validationErrors() {
    return this._validationErrors;
  }
  public putValidationErrors(value: CertificatePackValidationErrors[] | cdktf.IResolvable) {
    this._validationErrors.internalValue = value;
  }
  public resetValidationErrors() {
    this._validationErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationErrorsInput() {
    return this._validationErrors.internalValue;
  }

  // validation_records - computed: false, optional: true, required: false
  private _validationRecords = new CertificatePackValidationRecordsList(this, "validation_records", false);
  public get validationRecords() {
    return this._validationRecords;
  }
  public putValidationRecords(value: CertificatePackValidationRecords[] | cdktf.IResolvable) {
    this._validationRecords.internalValue = value;
  }
  public resetValidationRecords() {
    this._validationRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRecordsInput() {
    return this._validationRecords.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      cloudflare_branding: cdktf.booleanToTerraform(this._cloudflareBranding),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
      validation_method: cdktf.stringToTerraform(this._validationMethod),
      validity_days: cdktf.numberToTerraform(this._validityDays),
      wait_for_active_status: cdktf.booleanToTerraform(this._waitForActiveStatus),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      validation_errors: cdktf.listMapper(certificatePackValidationErrorsToTerraform, true)(this._validationErrors.internalValue),
      validation_records: cdktf.listMapper(certificatePackValidationRecordsToTerraform, true)(this._validationRecords.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_authority: {
        value: cdktf.stringToHclTerraform(this._certificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_branding: {
        value: cdktf.booleanToHclTerraform(this._cloudflareBranding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_method: {
        value: cdktf.stringToHclTerraform(this._validationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_days: {
        value: cdktf.numberToHclTerraform(this._validityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_for_active_status: {
        value: cdktf.booleanToHclTerraform(this._waitForActiveStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_errors: {
        value: cdktf.listMapperHcl(certificatePackValidationErrorsToHclTerraform, true)(this._validationErrors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatePackValidationErrorsList",
      },
      validation_records: {
        value: cdktf.listMapperHcl(certificatePackValidationRecordsToHclTerraform, true)(this._validationRecords.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificatePackValidationRecordsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
