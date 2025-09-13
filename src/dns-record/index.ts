/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments or notes about the DNS record. This field has no effect on DNS responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#comment DnsRecord#comment}
  */
  readonly comment?: string;
  /**
  * A valid IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#content DnsRecord#content}
  */
  readonly content?: string;
  /**
  * Components of a CAA record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#data DnsRecord#data}
  */
  readonly data?: DnsRecordData;
  /**
  * DNS record name (or @ for the zone apex) in Punycode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#name DnsRecord#name}
  */
  readonly name: string;
  /**
  * Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * Whether the record is receiving the performance and security benefits of Cloudflare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#proxied DnsRecord#proxied}
  */
  readonly proxied?: boolean | cdktf.IResolvable;
  /**
  * Settings for the DNS record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#settings DnsRecord#settings}
  */
  readonly settings?: DnsRecordSettings;
  /**
  * Custom tags for the DNS record. This field has no effect on DNS responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tags DnsRecord#tags}
  */
  readonly tags?: string[];
  /**
  * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ttl DnsRecord#ttl}
  */
  readonly ttl: number;
  /**
  * Record type.
  * Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}
  */
  readonly zoneId: string;
}
export interface DnsRecordData {
  /**
  * Algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}
  */
  readonly algorithm?: number;
  /**
  * Altitude of location in meters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#altitude DnsRecord#altitude}
  */
  readonly altitude?: number;
  /**
  * Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#certificate DnsRecord#certificate}
  */
  readonly certificate?: string;
  /**
  * Digest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest DnsRecord#digest}
  */
  readonly digest?: string;
  /**
  * Digest Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}
  */
  readonly digestType?: number;
  /**
  * Fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Flags for the CAA record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flags DnsRecord#flags}
  */
  readonly flags?: { [key: string]: any };
  /**
  * Key Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}
  */
  readonly keyTag?: number;
  /**
  * Degrees of latitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}
  */
  readonly latDegrees?: number;
  /**
  * Latitude direction.
  * Available values: "N", "S".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}
  */
  readonly latDirection?: string;
  /**
  * Minutes of latitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}
  */
  readonly latMinutes?: number;
  /**
  * Seconds of latitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}
  */
  readonly latSeconds?: number;
  /**
  * Degrees of longitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}
  */
  readonly longDegrees?: number;
  /**
  * Longitude direction.
  * Available values: "E", "W".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}
  */
  readonly longDirection?: string;
  /**
  * Minutes of longitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}
  */
  readonly longMinutes?: number;
  /**
  * Seconds of longitude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}
  */
  readonly longSeconds?: number;
  /**
  * Matching Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}
  */
  readonly matchingType?: number;
  /**
  * Order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#order DnsRecord#order}
  */
  readonly order?: number;
  /**
  * The port of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#port DnsRecord#port}
  */
  readonly port?: number;
  /**
  * Horizontal precision of location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}
  */
  readonly precisionHorz?: number;
  /**
  * Vertical precision of location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}
  */
  readonly precisionVert?: number;
  /**
  * Preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#preference DnsRecord#preference}
  */
  readonly preference?: number;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#priority DnsRecord#priority}
  */
  readonly priority?: number;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#protocol DnsRecord#protocol}
  */
  readonly protocol?: number;
  /**
  * Public Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#public_key DnsRecord#public_key}
  */
  readonly publicKey?: string;
  /**
  * Regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#regex DnsRecord#regex}
  */
  readonly regex?: string;
  /**
  * Replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#replacement DnsRecord#replacement}
  */
  readonly replacement?: string;
  /**
  * Selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#selector DnsRecord#selector}
  */
  readonly selector?: number;
  /**
  * Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#service DnsRecord#service}
  */
  readonly service?: string;
  /**
  * Size of location in meters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#size DnsRecord#size}
  */
  readonly size?: number;
  /**
  * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#tag DnsRecord#tag}
  */
  readonly tag?: string;
  /**
  * Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#target DnsRecord#target}
  */
  readonly target?: string;
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#type DnsRecord#type}
  */
  readonly type?: number;
  /**
  * Usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#usage DnsRecord#usage}
  */
  readonly usage?: number;
  /**
  * Value of the record. This field's semantics depend on the chosen tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#value DnsRecord#value}
  */
  readonly value?: string;
  /**
  * The record weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#weight DnsRecord#weight}
  */
  readonly weight?: number;
}

export function dnsRecordDataToTerraform(struct?: DnsRecordData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.numberToTerraform(struct!.algorithm),
    altitude: cdktf.numberToTerraform(struct!.altitude),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    digest: cdktf.stringToTerraform(struct!.digest),
    digest_type: cdktf.numberToTerraform(struct!.digestType),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    flags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.flags),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
    lat_degrees: cdktf.numberToTerraform(struct!.latDegrees),
    lat_direction: cdktf.stringToTerraform(struct!.latDirection),
    lat_minutes: cdktf.numberToTerraform(struct!.latMinutes),
    lat_seconds: cdktf.numberToTerraform(struct!.latSeconds),
    long_degrees: cdktf.numberToTerraform(struct!.longDegrees),
    long_direction: cdktf.stringToTerraform(struct!.longDirection),
    long_minutes: cdktf.numberToTerraform(struct!.longMinutes),
    long_seconds: cdktf.numberToTerraform(struct!.longSeconds),
    matching_type: cdktf.numberToTerraform(struct!.matchingType),
    order: cdktf.numberToTerraform(struct!.order),
    port: cdktf.numberToTerraform(struct!.port),
    precision_horz: cdktf.numberToTerraform(struct!.precisionHorz),
    precision_vert: cdktf.numberToTerraform(struct!.precisionVert),
    preference: cdktf.numberToTerraform(struct!.preference),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    selector: cdktf.numberToTerraform(struct!.selector),
    service: cdktf.stringToTerraform(struct!.service),
    size: cdktf.numberToTerraform(struct!.size),
    tag: cdktf.stringToTerraform(struct!.tag),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.numberToTerraform(struct!.type),
    usage: cdktf.numberToTerraform(struct!.usage),
    value: cdktf.stringToTerraform(struct!.value),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dnsRecordDataToHclTerraform(struct?: DnsRecordData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.numberToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    altitude: {
      value: cdktf.numberToHclTerraform(struct!.altitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest_type: {
      value: cdktf.numberToHclTerraform(struct!.digestType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(struct!.flags),
      isBlock: false,
      type: "map",
      storageClassType: "anyMap",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lat_degrees: {
      value: cdktf.numberToHclTerraform(struct!.latDegrees),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lat_direction: {
      value: cdktf.stringToHclTerraform(struct!.latDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lat_minutes: {
      value: cdktf.numberToHclTerraform(struct!.latMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lat_seconds: {
      value: cdktf.numberToHclTerraform(struct!.latSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long_degrees: {
      value: cdktf.numberToHclTerraform(struct!.longDegrees),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long_direction: {
      value: cdktf.stringToHclTerraform(struct!.longDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_minutes: {
      value: cdktf.numberToHclTerraform(struct!.longMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    long_seconds: {
      value: cdktf.numberToHclTerraform(struct!.longSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matching_type: {
      value: cdktf.numberToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    precision_horz: {
      value: cdktf.numberToHclTerraform(struct!.precisionHorz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    precision_vert: {
      value: cdktf.numberToHclTerraform(struct!.precisionVert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.numberToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    usage: {
      value: cdktf.numberToHclTerraform(struct!.usage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsRecordDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._altitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitude = this._altitude;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._digestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestType = this._digestType;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    if (this._latDegrees !== undefined) {
      hasAnyValues = true;
      internalValueResult.latDegrees = this._latDegrees;
    }
    if (this._latDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.latDirection = this._latDirection;
    }
    if (this._latMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.latMinutes = this._latMinutes;
    }
    if (this._latSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.latSeconds = this._latSeconds;
    }
    if (this._longDegrees !== undefined) {
      hasAnyValues = true;
      internalValueResult.longDegrees = this._longDegrees;
    }
    if (this._longDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.longDirection = this._longDirection;
    }
    if (this._longMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.longMinutes = this._longMinutes;
    }
    if (this._longSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.longSeconds = this._longSeconds;
    }
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._precisionHorz !== undefined) {
      hasAnyValues = true;
      internalValueResult.precisionHorz = this._precisionHorz;
    }
    if (this._precisionVert !== undefined) {
      hasAnyValues = true;
      internalValueResult.precisionVert = this._precisionVert;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usage !== undefined) {
      hasAnyValues = true;
      internalValueResult.usage = this._usage;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._altitude = undefined;
      this._certificate = undefined;
      this._digest = undefined;
      this._digestType = undefined;
      this._fingerprint = undefined;
      this._flags = undefined;
      this._keyTag = undefined;
      this._latDegrees = undefined;
      this._latDirection = undefined;
      this._latMinutes = undefined;
      this._latSeconds = undefined;
      this._longDegrees = undefined;
      this._longDirection = undefined;
      this._longMinutes = undefined;
      this._longSeconds = undefined;
      this._matchingType = undefined;
      this._order = undefined;
      this._port = undefined;
      this._precisionHorz = undefined;
      this._precisionVert = undefined;
      this._preference = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._publicKey = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._selector = undefined;
      this._service = undefined;
      this._size = undefined;
      this._tag = undefined;
      this._target = undefined;
      this._type = undefined;
      this._usage = undefined;
      this._value = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._altitude = value.altitude;
      this._certificate = value.certificate;
      this._digest = value.digest;
      this._digestType = value.digestType;
      this._fingerprint = value.fingerprint;
      this._flags = value.flags;
      this._keyTag = value.keyTag;
      this._latDegrees = value.latDegrees;
      this._latDirection = value.latDirection;
      this._latMinutes = value.latMinutes;
      this._latSeconds = value.latSeconds;
      this._longDegrees = value.longDegrees;
      this._longDirection = value.longDirection;
      this._longMinutes = value.longMinutes;
      this._longSeconds = value.longSeconds;
      this._matchingType = value.matchingType;
      this._order = value.order;
      this._port = value.port;
      this._precisionHorz = value.precisionHorz;
      this._precisionVert = value.precisionVert;
      this._preference = value.preference;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._publicKey = value.publicKey;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._selector = value.selector;
      this._service = value.service;
      this._size = value.size;
      this._tag = value.tag;
      this._target = value.target;
      this._type = value.type;
      this._usage = value.usage;
      this._value = value.value;
      this._weight = value.weight;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // altitude - computed: false, optional: true, required: false
  private _altitude?: number; 
  public get altitude() {
    return this.getNumberAttribute('altitude');
  }
  public set altitude(value: number) {
    this._altitude = value;
  }
  public resetAltitude() {
    this._altitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // digest_type - computed: false, optional: true, required: false
  private _digestType?: number; 
  public get digestType() {
    return this.getNumberAttribute('digest_type');
  }
  public set digestType(value: number) {
    this._digestType = value;
  }
  public resetDigestType() {
    this._digestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestTypeInput() {
    return this._digestType;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // flags - computed: false, optional: true, required: false
  private _flags?: { [key: string]: any }; 
  public get flags() {
    return this.getAnyMapAttribute('flags');
  }
  public set flags(value: { [key: string]: any }) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // key_tag - computed: false, optional: true, required: false
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  public resetKeyTag() {
    this._keyTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }

  // lat_degrees - computed: false, optional: true, required: false
  private _latDegrees?: number; 
  public get latDegrees() {
    return this.getNumberAttribute('lat_degrees');
  }
  public set latDegrees(value: number) {
    this._latDegrees = value;
  }
  public resetLatDegrees() {
    this._latDegrees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latDegreesInput() {
    return this._latDegrees;
  }

  // lat_direction - computed: false, optional: true, required: false
  private _latDirection?: string; 
  public get latDirection() {
    return this.getStringAttribute('lat_direction');
  }
  public set latDirection(value: string) {
    this._latDirection = value;
  }
  public resetLatDirection() {
    this._latDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latDirectionInput() {
    return this._latDirection;
  }

  // lat_minutes - computed: false, optional: true, required: false
  private _latMinutes?: number; 
  public get latMinutes() {
    return this.getNumberAttribute('lat_minutes');
  }
  public set latMinutes(value: number) {
    this._latMinutes = value;
  }
  public resetLatMinutes() {
    this._latMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latMinutesInput() {
    return this._latMinutes;
  }

  // lat_seconds - computed: false, optional: true, required: false
  private _latSeconds?: number; 
  public get latSeconds() {
    return this.getNumberAttribute('lat_seconds');
  }
  public set latSeconds(value: number) {
    this._latSeconds = value;
  }
  public resetLatSeconds() {
    this._latSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latSecondsInput() {
    return this._latSeconds;
  }

  // long_degrees - computed: false, optional: true, required: false
  private _longDegrees?: number; 
  public get longDegrees() {
    return this.getNumberAttribute('long_degrees');
  }
  public set longDegrees(value: number) {
    this._longDegrees = value;
  }
  public resetLongDegrees() {
    this._longDegrees = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDegreesInput() {
    return this._longDegrees;
  }

  // long_direction - computed: false, optional: true, required: false
  private _longDirection?: string; 
  public get longDirection() {
    return this.getStringAttribute('long_direction');
  }
  public set longDirection(value: string) {
    this._longDirection = value;
  }
  public resetLongDirection() {
    this._longDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDirectionInput() {
    return this._longDirection;
  }

  // long_minutes - computed: false, optional: true, required: false
  private _longMinutes?: number; 
  public get longMinutes() {
    return this.getNumberAttribute('long_minutes');
  }
  public set longMinutes(value: number) {
    this._longMinutes = value;
  }
  public resetLongMinutes() {
    this._longMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longMinutesInput() {
    return this._longMinutes;
  }

  // long_seconds - computed: false, optional: true, required: false
  private _longSeconds?: number; 
  public get longSeconds() {
    return this.getNumberAttribute('long_seconds');
  }
  public set longSeconds(value: number) {
    this._longSeconds = value;
  }
  public resetLongSeconds() {
    this._longSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longSecondsInput() {
    return this._longSeconds;
  }

  // matching_type - computed: false, optional: true, required: false
  private _matchingType?: number; 
  public get matchingType() {
    return this.getNumberAttribute('matching_type');
  }
  public set matchingType(value: number) {
    this._matchingType = value;
  }
  public resetMatchingType() {
    this._matchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // precision_horz - computed: false, optional: true, required: false
  private _precisionHorz?: number; 
  public get precisionHorz() {
    return this.getNumberAttribute('precision_horz');
  }
  public set precisionHorz(value: number) {
    this._precisionHorz = value;
  }
  public resetPrecisionHorz() {
    this._precisionHorz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionHorzInput() {
    return this._precisionHorz;
  }

  // precision_vert - computed: false, optional: true, required: false
  private _precisionVert?: number; 
  public get precisionVert() {
    return this.getNumberAttribute('precision_vert');
  }
  public set precisionVert(value: number) {
    this._precisionVert = value;
  }
  public resetPrecisionVert() {
    this._precisionVert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionVertInput() {
    return this._precisionVert;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: number; 
  public get selector() {
    return this.getNumberAttribute('selector');
  }
  public set selector(value: number) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usage - computed: false, optional: true, required: false
  private _usage?: number; 
  public get usage() {
    return this.getNumberAttribute('usage');
  }
  public set usage(value: number) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DnsRecordSettings {
  /**
  * If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}
  */
  readonly flattenCname?: boolean | cdktf.IResolvable;
  /**
  * When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}
  */
  readonly ipv4Only?: boolean | cdktf.IResolvable;
  /**
  * When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}
  */
  readonly ipv6Only?: boolean | cdktf.IResolvable;
}

export function dnsRecordSettingsToTerraform(struct?: DnsRecordSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flatten_cname: cdktf.booleanToTerraform(struct!.flattenCname),
    ipv4_only: cdktf.booleanToTerraform(struct!.ipv4Only),
    ipv6_only: cdktf.booleanToTerraform(struct!.ipv6Only),
  }
}


export function dnsRecordSettingsToHclTerraform(struct?: DnsRecordSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flatten_cname: {
      value: cdktf.booleanToHclTerraform(struct!.flattenCname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4_only: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_only: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsRecordSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flattenCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenCname = this._flattenCname;
    }
    if (this._ipv4Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Only = this._ipv4Only;
    }
    if (this._ipv6Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Only = this._ipv6Only;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flattenCname = undefined;
      this._ipv4Only = undefined;
      this._ipv6Only = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flattenCname = value.flattenCname;
      this._ipv4Only = value.ipv4Only;
      this._ipv6Only = value.ipv6Only;
    }
  }

  // flatten_cname - computed: true, optional: true, required: false
  private _flattenCname?: boolean | cdktf.IResolvable; 
  public get flattenCname() {
    return this.getBooleanAttribute('flatten_cname');
  }
  public set flattenCname(value: boolean | cdktf.IResolvable) {
    this._flattenCname = value;
  }
  public resetFlattenCname() {
    this._flattenCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenCnameInput() {
    return this._flattenCname;
  }

  // ipv4_only - computed: true, optional: true, required: false
  private _ipv4Only?: boolean | cdktf.IResolvable; 
  public get ipv4Only() {
    return this.getBooleanAttribute('ipv4_only');
  }
  public set ipv4Only(value: boolean | cdktf.IResolvable) {
    this._ipv4Only = value;
  }
  public resetIpv4Only() {
    this._ipv4Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OnlyInput() {
    return this._ipv4Only;
  }

  // ipv6_only - computed: true, optional: true, required: false
  private _ipv6Only?: boolean | cdktf.IResolvable; 
  public get ipv6Only() {
    return this.getBooleanAttribute('ipv6_only');
  }
  public set ipv6Only(value: boolean | cdktf.IResolvable) {
    this._ipv6Only = value;
  }
  public resetIpv6Only() {
    this._ipv6Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OnlyInput() {
    return this._ipv6Only;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record cloudflare_dns_record}
*/
export class DnsRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_dns_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecord to import
  * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.0/docs/resources/dns_record cloudflare_dns_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.10.0',
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
    this._comment = config.comment;
    this._content = config.content;
    this._data.internalValue = config.data;
    this._name = config.name;
    this._priority = config.priority;
    this._proxied = config.proxied;
    this._settings.internalValue = config.settings;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // comment_modified_on - computed: true, optional: false, required: false
  public get commentModifiedOn() {
    return this.getStringAttribute('comment_modified_on');
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // data - computed: false, optional: true, required: false
  private _data = new DnsRecordDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DnsRecordData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // proxiable - computed: true, optional: false, required: false
  public get proxiable() {
    return this.getBooleanAttribute('proxiable');
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

  // settings - computed: true, optional: true, required: false
  private _settings = new DnsRecordSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DnsRecordSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_modified_on - computed: true, optional: false, required: false
  public get tagsModifiedOn() {
    return this.getStringAttribute('tags_modified_on');
  }

  // ttl - computed: false, optional: false, required: true
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
      comment: cdktf.stringToTerraform(this._comment),
      content: cdktf.stringToTerraform(this._content),
      data: dnsRecordDataToTerraform(this._data.internalValue),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      proxied: cdktf.booleanToTerraform(this._proxied),
      settings: dnsRecordSettingsToTerraform(this._settings.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: dnsRecordDataToHclTerraform(this._data.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsRecordData",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxied: {
        value: cdktf.booleanToHclTerraform(this._proxied),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      settings: {
        value: dnsRecordSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsRecordSettings",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
