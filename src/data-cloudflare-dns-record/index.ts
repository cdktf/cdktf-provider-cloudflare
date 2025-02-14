// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareDnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#dns_record_id DataCloudflareDnsRecord#dns_record_id}
  */
  readonly dnsRecordId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}
  */
  readonly filter?: DataCloudflareDnsRecordFilter;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#zone_id DataCloudflareDnsRecord#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareDnsRecordData {
}

export function dataCloudflareDnsRecordDataToTerraform(struct?: DataCloudflareDnsRecordData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsRecordDataToHclTerraform(struct?: DataCloudflareDnsRecordData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsRecordDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }

  // altitude - computed: true, optional: false, required: false
  public get altitude() {
    return this.getNumberAttribute('altitude');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // digest_type - computed: true, optional: false, required: false
  public get digestType() {
    return this.getNumberAttribute('digest_type');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // flags - computed: true, optional: false, required: false
  private _flags = new cdktf.AnyMap(this, "flags");
  public get flags() {
    return this._flags;
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // lat_degrees - computed: true, optional: false, required: false
  public get latDegrees() {
    return this.getNumberAttribute('lat_degrees');
  }

  // lat_direction - computed: true, optional: false, required: false
  public get latDirection() {
    return this.getStringAttribute('lat_direction');
  }

  // lat_minutes - computed: true, optional: false, required: false
  public get latMinutes() {
    return this.getNumberAttribute('lat_minutes');
  }

  // lat_seconds - computed: true, optional: false, required: false
  public get latSeconds() {
    return this.getNumberAttribute('lat_seconds');
  }

  // long_degrees - computed: true, optional: false, required: false
  public get longDegrees() {
    return this.getNumberAttribute('long_degrees');
  }

  // long_direction - computed: true, optional: false, required: false
  public get longDirection() {
    return this.getStringAttribute('long_direction');
  }

  // long_minutes - computed: true, optional: false, required: false
  public get longMinutes() {
    return this.getNumberAttribute('long_minutes');
  }

  // long_seconds - computed: true, optional: false, required: false
  public get longSeconds() {
    return this.getNumberAttribute('long_seconds');
  }

  // matching_type - computed: true, optional: false, required: false
  public get matchingType() {
    return this.getNumberAttribute('matching_type');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // precision_horz - computed: true, optional: false, required: false
  public get precisionHorz() {
    return this.getNumberAttribute('precision_horz');
  }

  // precision_vert - computed: true, optional: false, required: false
  public get precisionVert() {
    return this.getNumberAttribute('precision_vert');
  }

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.getNumberAttribute('preference');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // replacement - computed: true, optional: false, required: false
  public get replacement() {
    return this.getStringAttribute('replacement');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getNumberAttribute('selector');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataCloudflareDnsRecordFilterComment {
  /**
  * If this parameter is present, only records *without* a comment are returned.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}
  */
  readonly absent?: string;
  /**
  * Substring of the DNS record comment. Comment filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
  */
  readonly contains?: string;
  /**
  * Suffix of the DNS record comment. Comment filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
  */
  readonly endswith?: string;
  /**
  * Exact value of the DNS record comment. Comment filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
  */
  readonly exact?: string;
  /**
  * If this parameter is present, only records *with* a comment are returned.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}
  */
  readonly present?: string;
  /**
  * Prefix of the DNS record comment. Comment filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
  */
  readonly startswith?: string;
}

export function dataCloudflareDnsRecordFilterCommentToTerraform(struct?: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absent: cdktf.stringToTerraform(struct!.absent),
    contains: cdktf.stringToTerraform(struct!.contains),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    exact: cdktf.stringToTerraform(struct!.exact),
    present: cdktf.stringToTerraform(struct!.present),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function dataCloudflareDnsRecordFilterCommentToHclTerraform(struct?: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absent: {
      value: cdktf.stringToHclTerraform(struct!.absent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.stringToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsRecordFilterCommentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordFilterComment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absent !== undefined) {
      hasAnyValues = true;
      internalValueResult.absent = this._absent;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absent = undefined;
      this._contains = undefined;
      this._endswith = undefined;
      this._exact = undefined;
      this._present = undefined;
      this._startswith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absent = value.absent;
      this._contains = value.contains;
      this._endswith = value.endswith;
      this._exact = value.exact;
      this._present = value.present;
      this._startswith = value.startswith;
    }
  }

  // absent - computed: false, optional: true, required: false
  private _absent?: string; 
  public get absent() {
    return this.getStringAttribute('absent');
  }
  public set absent(value: string) {
    this._absent = value;
  }
  public resetAbsent() {
    this._absent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absentInput() {
    return this._absent;
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // present - computed: false, optional: true, required: false
  private _present?: string; 
  public get present() {
    return this.getStringAttribute('present');
  }
  public set present(value: string) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface DataCloudflareDnsRecordFilterContent {
  /**
  * Substring of the DNS record content. Content filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
  */
  readonly contains?: string;
  /**
  * Suffix of the DNS record content. Content filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
  */
  readonly endswith?: string;
  /**
  * Exact value of the DNS record content. Content filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
  */
  readonly exact?: string;
  /**
  * Prefix of the DNS record content. Content filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
  */
  readonly startswith?: string;
}

export function dataCloudflareDnsRecordFilterContentToTerraform(struct?: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    exact: cdktf.stringToTerraform(struct!.exact),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function dataCloudflareDnsRecordFilterContentToHclTerraform(struct?: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsRecordFilterContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordFilterContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._endswith = undefined;
      this._exact = undefined;
      this._startswith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._endswith = value.endswith;
      this._exact = value.exact;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface DataCloudflareDnsRecordFilterName {
  /**
  * Substring of the DNS record name. Name filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
  */
  readonly contains?: string;
  /**
  * Suffix of the DNS record name. Name filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
  */
  readonly endswith?: string;
  /**
  * Exact value of the DNS record name. Name filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
  */
  readonly exact?: string;
  /**
  * Prefix of the DNS record name. Name filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
  */
  readonly startswith?: string;
}

export function dataCloudflareDnsRecordFilterNameToTerraform(struct?: DataCloudflareDnsRecordFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    exact: cdktf.stringToTerraform(struct!.exact),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function dataCloudflareDnsRecordFilterNameToHclTerraform(struct?: DataCloudflareDnsRecordFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsRecordFilterNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordFilterName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordFilterName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._endswith = undefined;
      this._exact = undefined;
      this._startswith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._endswith = value.endswith;
      this._exact = value.exact;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface DataCloudflareDnsRecordFilterTag {
  /**
  * Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}
  */
  readonly absent?: string;
  /**
  * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
  */
  readonly contains?: string;
  /**
  * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
  */
  readonly endswith?: string;
  /**
  * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
  */
  readonly exact?: string;
  /**
  * Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}
  */
  readonly present?: string;
  /**
  * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
  */
  readonly startswith?: string;
}

export function dataCloudflareDnsRecordFilterTagToTerraform(struct?: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absent: cdktf.stringToTerraform(struct!.absent),
    contains: cdktf.stringToTerraform(struct!.contains),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    exact: cdktf.stringToTerraform(struct!.exact),
    present: cdktf.stringToTerraform(struct!.present),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function dataCloudflareDnsRecordFilterTagToHclTerraform(struct?: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absent: {
      value: cdktf.stringToHclTerraform(struct!.absent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present: {
      value: cdktf.stringToHclTerraform(struct!.present),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsRecordFilterTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordFilterTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absent !== undefined) {
      hasAnyValues = true;
      internalValueResult.absent = this._absent;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._present !== undefined) {
      hasAnyValues = true;
      internalValueResult.present = this._present;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absent = undefined;
      this._contains = undefined;
      this._endswith = undefined;
      this._exact = undefined;
      this._present = undefined;
      this._startswith = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absent = value.absent;
      this._contains = value.contains;
      this._endswith = value.endswith;
      this._exact = value.exact;
      this._present = value.present;
      this._startswith = value.startswith;
    }
  }

  // absent - computed: false, optional: true, required: false
  private _absent?: string; 
  public get absent() {
    return this.getStringAttribute('absent');
  }
  public set absent(value: string) {
    this._absent = value;
  }
  public resetAbsent() {
    this._absent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absentInput() {
    return this._absent;
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // present - computed: false, optional: true, required: false
  private _present?: string; 
  public get present() {
    return this.getStringAttribute('present');
  }
  public set present(value: string) {
    this._present = value;
  }
  public resetPresent() {
    this._present = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentInput() {
    return this._present;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface DataCloudflareDnsRecordFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}
  */
  readonly comment?: DataCloudflareDnsRecordFilterComment;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}
  */
  readonly content?: DataCloudflareDnsRecordFilterContent;
  /**
  * Direction to order DNS records in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#direction DataCloudflareDnsRecord#direction}
  */
  readonly direction?: string;
  /**
  * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#match DataCloudflareDnsRecord#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}
  */
  readonly name?: DataCloudflareDnsRecordFilterName;
  /**
  * Field to order DNS records by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#order DataCloudflareDnsRecord#order}
  */
  readonly order?: string;
  /**
  * Whether the record is receiving the performance and security benefits of Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#proxied DataCloudflareDnsRecord#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#search DataCloudflareDnsRecord#search}
  */
  readonly search?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}
  */
  readonly tag?: DataCloudflareDnsRecordFilterTag;
  /**
  * Whether to match all tag search requirements or at least one (any). If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#tag_match DataCloudflareDnsRecord#tag_match}
  */
  readonly tagMatch?: string;
  /**
  * Record type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#type DataCloudflareDnsRecord#type}
  */
  readonly type?: string;
}

export function dataCloudflareDnsRecordFilterToTerraform(struct?: DataCloudflareDnsRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: dataCloudflareDnsRecordFilterCommentToTerraform(struct!.comment),
    content: dataCloudflareDnsRecordFilterContentToTerraform(struct!.content),
    direction: cdktf.stringToTerraform(struct!.direction),
    match: cdktf.stringToTerraform(struct!.match),
    name: dataCloudflareDnsRecordFilterNameToTerraform(struct!.name),
    order: cdktf.stringToTerraform(struct!.order),
    proxied: cdktf.booleanToTerraform(struct!.proxied),
    search: cdktf.stringToTerraform(struct!.search),
    tag: dataCloudflareDnsRecordFilterTagToTerraform(struct!.tag),
    tag_match: cdktf.stringToTerraform(struct!.tagMatch),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataCloudflareDnsRecordFilterToHclTerraform(struct?: DataCloudflareDnsRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: dataCloudflareDnsRecordFilterCommentToHclTerraform(struct!.comment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareDnsRecordFilterComment",
    },
    content: {
      value: dataCloudflareDnsRecordFilterContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareDnsRecordFilterContent",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: dataCloudflareDnsRecordFilterNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareDnsRecordFilterName",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxied: {
      value: cdktf.booleanToHclTerraform(struct!.proxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: dataCloudflareDnsRecordFilterTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "struct",
      storageClassType: "DataCloudflareDnsRecordFilterTag",
    },
    tag_match: {
      value: cdktf.stringToHclTerraform(struct!.tagMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCloudflareDnsRecordFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment?.internalValue;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._proxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxied = this._proxied;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._tagMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagMatch = this._tagMatch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment.internalValue = undefined;
      this._content.internalValue = undefined;
      this._direction = undefined;
      this._match = undefined;
      this._name.internalValue = undefined;
      this._order = undefined;
      this._proxied = undefined;
      this._search = undefined;
      this._tag.internalValue = undefined;
      this._tagMatch = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment.internalValue = value.comment;
      this._content.internalValue = value.content;
      this._direction = value.direction;
      this._match = value.match;
      this._name.internalValue = value.name;
      this._order = value.order;
      this._proxied = value.proxied;
      this._search = value.search;
      this._tag.internalValue = value.tag;
      this._tagMatch = value.tagMatch;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment = new DataCloudflareDnsRecordFilterCommentOutputReference(this, "comment");
  public get comment() {
    return this._comment;
  }
  public putComment(value: DataCloudflareDnsRecordFilterComment) {
    this._comment.internalValue = value;
  }
  public resetComment() {
    this._comment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataCloudflareDnsRecordFilterContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DataCloudflareDnsRecordFilterContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataCloudflareDnsRecordFilterNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataCloudflareDnsRecordFilterName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // proxied - computed: true, optional: true, required: false
  private _proxied?: boolean | cdktf.IResolvable; 
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }
  public set proxied(value: boolean | cdktf.IResolvable) {
    this._proxied = value;
  }
  public resetProxied() {
    this._proxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiedInput() {
    return this._proxied;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataCloudflareDnsRecordFilterTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataCloudflareDnsRecordFilterTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tag_match - computed: true, optional: true, required: false
  private _tagMatch?: string; 
  public get tagMatch() {
    return this.getStringAttribute('tag_match');
  }
  public set tagMatch(value: string) {
    this._tagMatch = value;
  }
  public resetTagMatch() {
    this._tagMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMatchInput() {
    return this._tagMatch;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataCloudflareDnsRecordSettings {
}

export function dataCloudflareDnsRecordSettingsToTerraform(struct?: DataCloudflareDnsRecordSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareDnsRecordSettingsToHclTerraform(struct?: DataCloudflareDnsRecordSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareDnsRecordSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareDnsRecordSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareDnsRecordSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flatten_cname - computed: true, optional: false, required: false
  public get flattenCname() {
    return this.getBooleanAttribute('flatten_cname');
  }

  // ipv4_only - computed: true, optional: false, required: false
  public get ipv4Only() {
    return this.getBooleanAttribute('ipv4_only');
  }

  // ipv6_only - computed: true, optional: false, required: false
  public get ipv6Only() {
    return this.getBooleanAttribute('ipv6_only');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record cloudflare_dns_record}
*/
export class DataCloudflareDnsRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecord to import
  * @param importFromId The id of the existing DataCloudflareDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareDnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/dns_record cloudflare_dns_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareDnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareDnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsRecordId = config.dnsRecordId;
    this._filter.internalValue = config.filter;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // comment_modified_on - computed: true, optional: false, required: false
  public get commentModifiedOn() {
    return this.getStringAttribute('comment_modified_on');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataCloudflareDnsRecordDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // dns_record_id - computed: false, optional: true, required: false
  private _dnsRecordId?: string; 
  public get dnsRecordId() {
    return this.getStringAttribute('dns_record_id');
  }
  public set dnsRecordId(value: string) {
    this._dnsRecordId = value;
  }
  public resetDnsRecordId() {
    this._dnsRecordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordIdInput() {
    return this._dnsRecordId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareDnsRecordFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareDnsRecordFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  public get meta() {
    return this.getStringAttribute('meta');
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // proxiable - computed: true, optional: false, required: false
  public get proxiable() {
    return this.getBooleanAttribute('proxiable');
  }

  // proxied - computed: true, optional: false, required: false
  public get proxied() {
    return this.getBooleanAttribute('proxied');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataCloudflareDnsRecordSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // tags_modified_on - computed: true, optional: false, required: false
  public get tagsModifiedOn() {
    return this.getStringAttribute('tags_modified_on');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_record_id: cdktf.stringToTerraform(this._dnsRecordId),
      filter: dataCloudflareDnsRecordFilterToTerraform(this._filter.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_record_id: {
        value: cdktf.stringToHclTerraform(this._dnsRecordId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataCloudflareDnsRecordFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCloudflareDnsRecordFilter",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
