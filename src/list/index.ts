// https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account identifier to target for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#account_id List#account_id}
  */
  readonly accountId: string;
  /**
  * An optional description of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#description List#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#id List#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The type of items the list will contain. Available values: `ip`, `redirect`, `hostname`, `asn`. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#kind List#kind}
  */
  readonly kind: string;
  /**
  * The name of the list. **Modifying this attribute will force creation of a new resource.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#name List#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#item List#item}
  */
  readonly item?: ListItem[] | cdktf.IResolvable;
}
export interface ListItemValueHostname {
  /**
  * The FQDN to match on. Wildcard sub-domain matching is allowed. Eg. *.abc.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#url_hostname List#url_hostname}
  */
  readonly urlHostname: string;
}

export function listItemValueHostnameToTerraform(struct?: ListItemValueHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_hostname: cdktf.stringToTerraform(struct!.urlHostname),
  }
}


export function listItemValueHostnameToHclTerraform(struct?: ListItemValueHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_hostname: {
      value: cdktf.stringToHclTerraform(struct!.urlHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemValueHostnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListItemValueHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlHostname = this._urlHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemValueHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlHostname = value.urlHostname;
    }
  }

  // url_hostname - computed: false, optional: false, required: true
  private _urlHostname?: string; 
  public get urlHostname() {
    return this.getStringAttribute('url_hostname');
  }
  public set urlHostname(value: string) {
    this._urlHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlHostnameInput() {
    return this._urlHostname;
  }
}

export class ListItemValueHostnameList extends cdktf.ComplexList {
  public internalValue? : ListItemValueHostname[] | cdktf.IResolvable

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
  public get(index: number): ListItemValueHostnameOutputReference {
    return new ListItemValueHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListItemValueRedirect {
  /**
  * Whether the redirect also matches subdomains of the source url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#include_subdomains List#include_subdomains}
  */
  readonly includeSubdomains?: string;
  /**
  * Whether to preserve the path suffix when doing subpath matching. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#preserve_path_suffix List#preserve_path_suffix}
  */
  readonly preservePathSuffix?: string;
  /**
  * Whether the redirect target url should keep the query string of the request's url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#preserve_query_string List#preserve_query_string}
  */
  readonly preserveQueryString?: string;
  /**
  * The source url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#source_url List#source_url}
  */
  readonly sourceUrl: string;
  /**
  * The status code to be used when redirecting a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#status_code List#status_code}
  */
  readonly statusCode?: number;
  /**
  * Whether the redirect also matches subpaths of the source url. Available values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#subpath_matching List#subpath_matching}
  */
  readonly subpathMatching?: string;
  /**
  * The target url of the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#target_url List#target_url}
  */
  readonly targetUrl: string;
}

export function listItemValueRedirectToTerraform(struct?: ListItemValueRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subdomains: cdktf.stringToTerraform(struct!.includeSubdomains),
    preserve_path_suffix: cdktf.stringToTerraform(struct!.preservePathSuffix),
    preserve_query_string: cdktf.stringToTerraform(struct!.preserveQueryString),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    subpath_matching: cdktf.stringToTerraform(struct!.subpathMatching),
    target_url: cdktf.stringToTerraform(struct!.targetUrl),
  }
}


export function listItemValueRedirectToHclTerraform(struct?: ListItemValueRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_subdomains: {
      value: cdktf.stringToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_path_suffix: {
      value: cdktf.stringToHclTerraform(struct!.preservePathSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_query_string: {
      value: cdktf.stringToHclTerraform(struct!.preserveQueryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subpath_matching: {
      value: cdktf.stringToHclTerraform(struct!.subpathMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_url: {
      value: cdktf.stringToHclTerraform(struct!.targetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemValueRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListItemValueRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._preservePathSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservePathSuffix = this._preservePathSuffix;
    }
    if (this._preserveQueryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveQueryString = this._preserveQueryString;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._subpathMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpathMatching = this._subpathMatching;
    }
    if (this._targetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUrl = this._targetUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemValueRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSubdomains = undefined;
      this._preservePathSuffix = undefined;
      this._preserveQueryString = undefined;
      this._sourceUrl = undefined;
      this._statusCode = undefined;
      this._subpathMatching = undefined;
      this._targetUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeSubdomains = value.includeSubdomains;
      this._preservePathSuffix = value.preservePathSuffix;
      this._preserveQueryString = value.preserveQueryString;
      this._sourceUrl = value.sourceUrl;
      this._statusCode = value.statusCode;
      this._subpathMatching = value.subpathMatching;
      this._targetUrl = value.targetUrl;
    }
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: string; 
  public get includeSubdomains() {
    return this.getStringAttribute('include_subdomains');
  }
  public set includeSubdomains(value: string) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // preserve_path_suffix - computed: false, optional: true, required: false
  private _preservePathSuffix?: string; 
  public get preservePathSuffix() {
    return this.getStringAttribute('preserve_path_suffix');
  }
  public set preservePathSuffix(value: string) {
    this._preservePathSuffix = value;
  }
  public resetPreservePathSuffix() {
    this._preservePathSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservePathSuffixInput() {
    return this._preservePathSuffix;
  }

  // preserve_query_string - computed: false, optional: true, required: false
  private _preserveQueryString?: string; 
  public get preserveQueryString() {
    return this.getStringAttribute('preserve_query_string');
  }
  public set preserveQueryString(value: string) {
    this._preserveQueryString = value;
  }
  public resetPreserveQueryString() {
    this._preserveQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveQueryStringInput() {
    return this._preserveQueryString;
  }

  // source_url - computed: false, optional: false, required: true
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // subpath_matching - computed: false, optional: true, required: false
  private _subpathMatching?: string; 
  public get subpathMatching() {
    return this.getStringAttribute('subpath_matching');
  }
  public set subpathMatching(value: string) {
    this._subpathMatching = value;
  }
  public resetSubpathMatching() {
    this._subpathMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathMatchingInput() {
    return this._subpathMatching;
  }

  // target_url - computed: false, optional: false, required: true
  private _targetUrl?: string; 
  public get targetUrl() {
    return this.getStringAttribute('target_url');
  }
  public set targetUrl(value: string) {
    this._targetUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUrlInput() {
    return this._targetUrl;
  }
}

export class ListItemValueRedirectList extends cdktf.ComplexList {
  public internalValue? : ListItemValueRedirect[] | cdktf.IResolvable

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
  public get(index: number): ListItemValueRedirectOutputReference {
    return new ListItemValueRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListItemValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#asn List#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#ip List#ip}
  */
  readonly ip?: string;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#hostname List#hostname}
  */
  readonly hostname?: ListItemValueHostname[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#redirect List#redirect}
  */
  readonly redirect?: ListItemValueRedirect[] | cdktf.IResolvable;
}

export function listItemValueToTerraform(struct?: ListItemValueOutputReference | ListItemValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    ip: cdktf.stringToTerraform(struct!.ip),
    hostname: cdktf.listMapper(listItemValueHostnameToTerraform, true)(struct!.hostname),
    redirect: cdktf.listMapper(listItemValueRedirectToTerraform, true)(struct!.redirect),
  }
}


export function listItemValueToHclTerraform(struct?: ListItemValueOutputReference | ListItemValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.listMapperHcl(listItemValueHostnameToHclTerraform, true)(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "ListItemValueHostnameList",
    },
    redirect: {
      value: cdktf.listMapperHcl(listItemValueRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "ListItemValueRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ListItemValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItemValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._ip = undefined;
      this._hostname.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._ip = value.ip;
      this._hostname.internalValue = value.hostname;
      this._redirect.internalValue = value.redirect;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new ListItemValueHostnameList(this, "hostname", false);
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: ListItemValueHostname[] | cdktf.IResolvable) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ListItemValueRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ListItemValueRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface ListItem {
  /**
  * An optional comment for the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#comment List#comment}
  */
  readonly comment?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#value List#value}
  */
  readonly value: ListItemValue;
}

export function listItemToTerraform(struct?: ListItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    value: listItemValueToTerraform(struct!.value),
  }
}


export function listItemToHclTerraform(struct?: ListItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: listItemValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ListItemValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._value.internalValue = value.value;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // value - computed: false, optional: false, required: true
  private _value = new ListItemValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ListItemValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ListItemList extends cdktf.ComplexList {
  public internalValue? : ListItem[] | cdktf.IResolvable

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
  public get(index: number): ListItemOutputReference {
    return new ListItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list cloudflare_list}
*/
export class List extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a List resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the List to import
  * @param importFromId The id of the existing List that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the List to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.24.0/docs/resources/list cloudflare_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListConfig
  */
  public constructor(scope: Construct, id: string, config: ListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '4.24.0',
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
    this._accountId = config.accountId;
    this._description = config.description;
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._item.internalValue = config.item;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // item - computed: false, optional: true, required: false
  private _item = new ListItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: ListItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      item: cdktf.listMapper(listItemToTerraform, true)(this._item.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item: {
        value: cdktf.listMapperHcl(listItemToHclTerraform, true)(this._item.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ListItemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
