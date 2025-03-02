// https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#account_id DnsSettings#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_defaults DnsSettings#zone_defaults}
  */
  readonly zoneDefaults?: DnsSettingsZoneDefaults;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_id DnsSettings#zone_id}
  */
  readonly zoneId?: string;
}
export interface DnsSettingsZoneDefaultsInternalDns {
  /**
  * The ID of the zone to fallback to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#reference_zone_id DnsSettings#reference_zone_id}
  */
  readonly referenceZoneId?: string;
}

export function dnsSettingsZoneDefaultsInternalDnsToTerraform(struct?: DnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_zone_id: cdktf.stringToTerraform(struct!.referenceZoneId),
  }
}


export function dnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct?: DnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSettingsZoneDefaultsInternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceZoneId = this._referenceZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSettingsZoneDefaultsInternalDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceZoneId = value.referenceZoneId;
    }
  }

  // reference_zone_id - computed: true, optional: true, required: false
  private _referenceZoneId?: string; 
  public get referenceZoneId() {
    return this.getStringAttribute('reference_zone_id');
  }
  public set referenceZoneId(value: string) {
    this._referenceZoneId = value;
  }
  public resetReferenceZoneId() {
    this._referenceZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceZoneIdInput() {
    return this._referenceZoneId;
  }
}
export interface DnsSettingsZoneDefaultsNameservers {
  /**
  * Nameserver type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#type DnsSettings#type}
  */
  readonly type: string;
}

export function dnsSettingsZoneDefaultsNameserversToTerraform(struct?: DnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnsSettingsZoneDefaultsNameserversToHclTerraform(struct?: DnsSettingsZoneDefaultsNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DnsSettingsZoneDefaultsNameserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSettingsZoneDefaultsNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: false, required: true
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
}
export interface DnsSettingsZoneDefaultsSoa {
  /**
  * Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#expire DnsSettings#expire}
  */
  readonly expire: number;
  /**
  * The time to live (TTL) for negative caching of records within the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#min_ttl DnsSettings#min_ttl}
  */
  readonly minTtl: number;
  /**
  * The primary nameserver, which may be used for outbound zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#mname DnsSettings#mname}
  */
  readonly mname: string;
  /**
  * Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#refresh DnsSettings#refresh}
  */
  readonly refresh: number;
  /**
  * Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#retry DnsSettings#retry}
  */
  readonly retry: number;
  /**
  * The email address of the zone administrator, with the first label representing the local part of the email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#rname DnsSettings#rname}
  */
  readonly rname: string;
  /**
  * The time to live (TTL) of the SOA record itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ttl DnsSettings#ttl}
  */
  readonly ttl: number;
}

export function dnsSettingsZoneDefaultsSoaToTerraform(struct?: DnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire: cdktf.numberToTerraform(struct!.expire),
    min_ttl: cdktf.numberToTerraform(struct!.minTtl),
    mname: cdktf.stringToTerraform(struct!.mname),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    retry: cdktf.numberToTerraform(struct!.retry),
    rname: cdktf.stringToTerraform(struct!.rname),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dnsSettingsZoneDefaultsSoaToHclTerraform(struct?: DnsSettingsZoneDefaultsSoa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_ttl: {
      value: cdktf.numberToHclTerraform(struct!.minTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rname: {
      value: cdktf.stringToHclTerraform(struct!.rname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSettingsZoneDefaultsSoaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._minTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTtl = this._minTtl;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._rname !== undefined) {
      hasAnyValues = true;
      internalValueResult.rname = this._rname;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSettingsZoneDefaultsSoa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expire = undefined;
      this._minTtl = undefined;
      this._mname = undefined;
      this._refresh = undefined;
      this._retry = undefined;
      this._rname = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expire = value.expire;
      this._minTtl = value.minTtl;
      this._mname = value.mname;
      this._refresh = value.refresh;
      this._retry = value.retry;
      this._rname = value.rname;
      this._ttl = value.ttl;
    }
  }

  // expire - computed: true, optional: false, required: true
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // min_ttl - computed: true, optional: false, required: true
  private _minTtl?: number; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number) {
    this._minTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl;
  }

  // mname - computed: true, optional: false, required: true
  private _mname?: string; 
  public get mname() {
    return this.getStringAttribute('mname');
  }
  public set mname(value: string) {
    this._mname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameInput() {
    return this._mname;
  }

  // refresh - computed: true, optional: false, required: true
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: true, optional: false, required: true
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // rname - computed: true, optional: false, required: true
  private _rname?: string; 
  public get rname() {
    return this.getStringAttribute('rname');
  }
  public set rname(value: string) {
    this._rname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rnameInput() {
    return this._rname;
  }

  // ttl - computed: true, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DnsSettingsZoneDefaults {
  /**
  * Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#flatten_all_cnames DnsSettings#flatten_all_cnames}
  */
  readonly flattenAllCnames?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Foundation DNS Advanced Nameservers on the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#foundation_dns DnsSettings#foundation_dns}
  */
  readonly foundationDns?: boolean | cdktf.IResolvable;
  /**
  * Settings for this internal zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#internal_dns DnsSettings#internal_dns}
  */
  readonly internalDns?: DnsSettingsZoneDefaultsInternalDns;
  /**
  * Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#multi_provider DnsSettings#multi_provider}
  */
  readonly multiProvider?: boolean | cdktf.IResolvable;
  /**
  * Settings determining the nameservers through which the zone should be available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#nameservers DnsSettings#nameservers}
  */
  readonly nameservers?: DnsSettingsZoneDefaultsNameservers;
  /**
  * The time to live (TTL) of the zone's nameserver (NS) records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#ns_ttl DnsSettings#ns_ttl}
  */
  readonly nsTtl?: number;
  /**
  * Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#secondary_overrides DnsSettings#secondary_overrides}
  */
  readonly secondaryOverrides?: boolean | cdktf.IResolvable;
  /**
  * Components of the zone's SOA record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#soa DnsSettings#soa}
  */
  readonly soa?: DnsSettingsZoneDefaultsSoa;
  /**
  * Whether the zone mode is a regular or CDN/DNS only zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#zone_mode DnsSettings#zone_mode}
  */
  readonly zoneMode?: string;
}

export function dnsSettingsZoneDefaultsToTerraform(struct?: DnsSettingsZoneDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flatten_all_cnames: cdktf.booleanToTerraform(struct!.flattenAllCnames),
    foundation_dns: cdktf.booleanToTerraform(struct!.foundationDns),
    internal_dns: dnsSettingsZoneDefaultsInternalDnsToTerraform(struct!.internalDns),
    multi_provider: cdktf.booleanToTerraform(struct!.multiProvider),
    nameservers: dnsSettingsZoneDefaultsNameserversToTerraform(struct!.nameservers),
    ns_ttl: cdktf.numberToTerraform(struct!.nsTtl),
    secondary_overrides: cdktf.booleanToTerraform(struct!.secondaryOverrides),
    soa: dnsSettingsZoneDefaultsSoaToTerraform(struct!.soa),
    zone_mode: cdktf.stringToTerraform(struct!.zoneMode),
  }
}


export function dnsSettingsZoneDefaultsToHclTerraform(struct?: DnsSettingsZoneDefaults | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flatten_all_cnames: {
      value: cdktf.booleanToHclTerraform(struct!.flattenAllCnames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    foundation_dns: {
      value: cdktf.booleanToHclTerraform(struct!.foundationDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_dns: {
      value: dnsSettingsZoneDefaultsInternalDnsToHclTerraform(struct!.internalDns),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSettingsZoneDefaultsInternalDns",
    },
    multi_provider: {
      value: cdktf.booleanToHclTerraform(struct!.multiProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nameservers: {
      value: dnsSettingsZoneDefaultsNameserversToHclTerraform(struct!.nameservers),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSettingsZoneDefaultsNameservers",
    },
    ns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.nsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_overrides: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soa: {
      value: dnsSettingsZoneDefaultsSoaToHclTerraform(struct!.soa),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsSettingsZoneDefaultsSoa",
    },
    zone_mode: {
      value: cdktf.stringToHclTerraform(struct!.zoneMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsSettingsZoneDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsSettingsZoneDefaults | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flattenAllCnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenAllCnames = this._flattenAllCnames;
    }
    if (this._foundationDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.foundationDns = this._foundationDns;
    }
    if (this._internalDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDns = this._internalDns?.internalValue;
    }
    if (this._multiProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiProvider = this._multiProvider;
    }
    if (this._nameservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers?.internalValue;
    }
    if (this._nsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsTtl = this._nsTtl;
    }
    if (this._secondaryOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryOverrides = this._secondaryOverrides;
    }
    if (this._soa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soa = this._soa?.internalValue;
    }
    if (this._zoneMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMode = this._zoneMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsSettingsZoneDefaults | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flattenAllCnames = undefined;
      this._foundationDns = undefined;
      this._internalDns.internalValue = undefined;
      this._multiProvider = undefined;
      this._nameservers.internalValue = undefined;
      this._nsTtl = undefined;
      this._secondaryOverrides = undefined;
      this._soa.internalValue = undefined;
      this._zoneMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flattenAllCnames = value.flattenAllCnames;
      this._foundationDns = value.foundationDns;
      this._internalDns.internalValue = value.internalDns;
      this._multiProvider = value.multiProvider;
      this._nameservers.internalValue = value.nameservers;
      this._nsTtl = value.nsTtl;
      this._secondaryOverrides = value.secondaryOverrides;
      this._soa.internalValue = value.soa;
      this._zoneMode = value.zoneMode;
    }
  }

  // flatten_all_cnames - computed: true, optional: true, required: false
  private _flattenAllCnames?: boolean | cdktf.IResolvable; 
  public get flattenAllCnames() {
    return this.getBooleanAttribute('flatten_all_cnames');
  }
  public set flattenAllCnames(value: boolean | cdktf.IResolvable) {
    this._flattenAllCnames = value;
  }
  public resetFlattenAllCnames() {
    this._flattenAllCnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenAllCnamesInput() {
    return this._flattenAllCnames;
  }

  // foundation_dns - computed: true, optional: true, required: false
  private _foundationDns?: boolean | cdktf.IResolvable; 
  public get foundationDns() {
    return this.getBooleanAttribute('foundation_dns');
  }
  public set foundationDns(value: boolean | cdktf.IResolvable) {
    this._foundationDns = value;
  }
  public resetFoundationDns() {
    this._foundationDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foundationDnsInput() {
    return this._foundationDns;
  }

  // internal_dns - computed: true, optional: true, required: false
  private _internalDns = new DnsSettingsZoneDefaultsInternalDnsOutputReference(this, "internal_dns");
  public get internalDns() {
    return this._internalDns;
  }
  public putInternalDns(value: DnsSettingsZoneDefaultsInternalDns) {
    this._internalDns.internalValue = value;
  }
  public resetInternalDns() {
    this._internalDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsInput() {
    return this._internalDns.internalValue;
  }

  // multi_provider - computed: true, optional: true, required: false
  private _multiProvider?: boolean | cdktf.IResolvable; 
  public get multiProvider() {
    return this.getBooleanAttribute('multi_provider');
  }
  public set multiProvider(value: boolean | cdktf.IResolvable) {
    this._multiProvider = value;
  }
  public resetMultiProvider() {
    this._multiProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiProviderInput() {
    return this._multiProvider;
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers = new DnsSettingsZoneDefaultsNameserversOutputReference(this, "nameservers");
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: DnsSettingsZoneDefaultsNameservers) {
    this._nameservers.internalValue = value;
  }
  public resetNameservers() {
    this._nameservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }

  // ns_ttl - computed: true, optional: true, required: false
  private _nsTtl?: number; 
  public get nsTtl() {
    return this.getNumberAttribute('ns_ttl');
  }
  public set nsTtl(value: number) {
    this._nsTtl = value;
  }
  public resetNsTtl() {
    this._nsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsTtlInput() {
    return this._nsTtl;
  }

  // secondary_overrides - computed: true, optional: true, required: false
  private _secondaryOverrides?: boolean | cdktf.IResolvable; 
  public get secondaryOverrides() {
    return this.getBooleanAttribute('secondary_overrides');
  }
  public set secondaryOverrides(value: boolean | cdktf.IResolvable) {
    this._secondaryOverrides = value;
  }
  public resetSecondaryOverrides() {
    this._secondaryOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryOverridesInput() {
    return this._secondaryOverrides;
  }

  // soa - computed: true, optional: true, required: false
  private _soa = new DnsSettingsZoneDefaultsSoaOutputReference(this, "soa");
  public get soa() {
    return this._soa;
  }
  public putSoa(value: DnsSettingsZoneDefaultsSoa) {
    this._soa.internalValue = value;
  }
  public resetSoa() {
    this._soa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaInput() {
    return this._soa.internalValue;
  }

  // zone_mode - computed: true, optional: true, required: false
  private _zoneMode?: string; 
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
  public set zoneMode(value: string) {
    this._zoneMode = value;
  }
  public resetZoneMode() {
    this._zoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneModeInput() {
    return this._zoneMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings}
*/
export class DnsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsSettings to import
  * @param importFromId The id of the existing DnsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_settings cloudflare_dns_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_settings',
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
    this._accountId = config.accountId;
    this._zoneDefaults.internalValue = config.zoneDefaults;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // zone_defaults - computed: true, optional: true, required: false
  private _zoneDefaults = new DnsSettingsZoneDefaultsOutputReference(this, "zone_defaults");
  public get zoneDefaults() {
    return this._zoneDefaults;
  }
  public putZoneDefaults(value: DnsSettingsZoneDefaults) {
    this._zoneDefaults.internalValue = value;
  }
  public resetZoneDefaults() {
    this._zoneDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneDefaultsInput() {
    return this._zoneDefaults.internalValue;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      zone_defaults: dnsSettingsZoneDefaultsToTerraform(this._zoneDefaults.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_defaults: {
        value: dnsSettingsZoneDefaultsToHclTerraform(this._zoneDefaults.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsSettingsZoneDefaults",
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
