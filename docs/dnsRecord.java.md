# `dnsRecord` Submodule <a name="`dnsRecord` Submodule" id="@cdktf/provider-cloudflare.dnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecord <a name="DnsRecord" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecord;

DnsRecord.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .comment(java.lang.String)
//  .content(java.lang.String)
//  .data(DnsRecordData)
//  .priority(java.lang.Number)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .settings(DnsRecordSettings)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.name"></a>

- *Type:* java.lang.String

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Record type.

Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.content"></a>

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.proxied"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#tags DnsRecord#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData">putData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putData` <a name="putData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData"></a>

```java
public void putData(DnsRecordData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings"></a>

```java
public void putSettings(DnsRecordSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment"></a>

```java
public void resetComment()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent"></a>

```java
public void resetContent()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData"></a>

```java
public void resetData()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied"></a>

```java
public void resetProxied()
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings"></a>

```java
public void resetSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecord;

DnsRecord.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecord;

DnsRecord.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecord;

DnsRecord.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecord;

DnsRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsRecord.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn">commentModifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta">meta</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable">proxiable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn">tagsModifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput">dataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput">proxiedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput">settingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commentModifiedOn`<sup>Required</sup> <a name="commentModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn"></a>

```java
public java.lang.String getCommentModifiedOn();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data"></a>

```java
public DnsRecordDataOutputReference getData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta"></a>

```java
public java.lang.String getMeta();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `proxiable`<sup>Required</sup> <a name="proxiable" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable"></a>

```java
public IResolvable getProxiable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings"></a>

```java
public DnsRecordSettingsOutputReference getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a>

---

##### `tagsModifiedOn`<sup>Required</sup> <a name="tagsModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn"></a>

```java
public java.lang.String getTagsModifiedOn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput"></a>

```java
public java.lang.Object getDataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput"></a>

```java
public java.lang.Object getProxiedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput"></a>

```java
public java.lang.Object getSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordConfig <a name="DnsRecordConfig" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecordConfig;

DnsRecordConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .comment(java.lang.String)
//  .content(java.lang.String)
//  .data(DnsRecordData)
//  .priority(java.lang.Number)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .settings(DnsRecordSettings)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type">type</a></code> | <code>java.lang.String</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content">content</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Record type.

Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data"></a>

```java
public DnsRecordData getData();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings"></a>

```java
public DnsRecordSettings getSettings();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#tags DnsRecord#tags}

---

### DnsRecordData <a name="DnsRecordData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecordData;

DnsRecordData.builder()
//  .algorithm(java.lang.Number)
//  .altitude(java.lang.Number)
//  .certificate(java.lang.String)
//  .digest(java.lang.String)
//  .digestType(java.lang.Number)
//  .fingerprint(java.lang.String)
//  .flags(java.util.Map<java.lang.String, java.lang.Object>)
//  .keyTag(java.lang.Number)
//  .latDegrees(java.lang.Number)
//  .latDirection(java.lang.String)
//  .latMinutes(java.lang.Number)
//  .latSeconds(java.lang.Number)
//  .longDegrees(java.lang.Number)
//  .longDirection(java.lang.String)
//  .longMinutes(java.lang.Number)
//  .longSeconds(java.lang.Number)
//  .matchingType(java.lang.Number)
//  .order(java.lang.Number)
//  .port(java.lang.Number)
//  .precisionHorz(java.lang.Number)
//  .precisionVert(java.lang.Number)
//  .preference(java.lang.Number)
//  .priority(java.lang.Number)
//  .protocol(java.lang.Number)
//  .publicKey(java.lang.String)
//  .regex(java.lang.String)
//  .replacement(java.lang.String)
//  .selector(java.lang.Number)
//  .service(java.lang.String)
//  .size(java.lang.Number)
//  .tag(java.lang.String)
//  .target(java.lang.String)
//  .type(java.lang.Number)
//  .usage(java.lang.Number)
//  .value(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | Algorithm. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude">altitude</a></code> | <code>java.lang.Number</code> | Altitude of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Certificate. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest">digest</a></code> | <code>java.lang.String</code> | Digest. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType">digestType</a></code> | <code>java.lang.Number</code> | Digest Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Fingerprint. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags">flags</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Flags for the CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | Key Tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees">latDegrees</a></code> | <code>java.lang.Number</code> | Degrees of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection">latDirection</a></code> | <code>java.lang.String</code> | Latitude direction. Available values: "N", "S". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes">latMinutes</a></code> | <code>java.lang.Number</code> | Minutes of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds">latSeconds</a></code> | <code>java.lang.Number</code> | Seconds of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees">longDegrees</a></code> | <code>java.lang.Number</code> | Degrees of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection">longDirection</a></code> | <code>java.lang.String</code> | Longitude direction. Available values: "E", "W". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes">longMinutes</a></code> | <code>java.lang.Number</code> | Minutes of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds">longSeconds</a></code> | <code>java.lang.Number</code> | Seconds of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType">matchingType</a></code> | <code>java.lang.Number</code> | Matching Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order">order</a></code> | <code>java.lang.Number</code> | Order. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port">port</a></code> | <code>java.lang.Number</code> | The port of the service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz">precisionHorz</a></code> | <code>java.lang.Number</code> | Horizontal precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert">precisionVert</a></code> | <code>java.lang.Number</code> | Vertical precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference">preference</a></code> | <code>java.lang.Number</code> | Preference. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | Protocol. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | Public Key. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex">regex</a></code> | <code>java.lang.String</code> | Regex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement">replacement</a></code> | <code>java.lang.String</code> | Replacement. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector">selector</a></code> | <code>java.lang.Number</code> | Selector. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service">service</a></code> | <code>java.lang.String</code> | Service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size">size</a></code> | <code>java.lang.Number</code> | Size of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag">tag</a></code> | <code>java.lang.String</code> | Name of the property controlled by this record (e.g.: issue, issuewild, iodef). |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target">target</a></code> | <code>java.lang.String</code> | Target. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type">type</a></code> | <code>java.lang.Number</code> | Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage">usage</a></code> | <code>java.lang.Number</code> | Usage. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value">value</a></code> | <code>java.lang.String</code> | Value of the record. This field's semantics depend on the chosen tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight">weight</a></code> | <code>java.lang.Number</code> | The record weight. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

##### `altitude`<sup>Optional</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude"></a>

```java
public java.lang.Number getAltitude();
```

- *Type:* java.lang.Number

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#digest DnsRecord#digest}

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType"></a>

```java
public java.lang.Number getDigestType();
```

- *Type:* java.lang.Number

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

Fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

##### `flags`<sup>Optional</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#flags DnsRecord#flags}

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

##### `latDegrees`<sup>Optional</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees"></a>

```java
public java.lang.Number getLatDegrees();
```

- *Type:* java.lang.Number

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

##### `latDirection`<sup>Optional</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection"></a>

```java
public java.lang.String getLatDirection();
```

- *Type:* java.lang.String

Latitude direction. Available values: "N", "S".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

##### `latMinutes`<sup>Optional</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes"></a>

```java
public java.lang.Number getLatMinutes();
```

- *Type:* java.lang.Number

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

##### `latSeconds`<sup>Optional</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds"></a>

```java
public java.lang.Number getLatSeconds();
```

- *Type:* java.lang.Number

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

##### `longDegrees`<sup>Optional</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees"></a>

```java
public java.lang.Number getLongDegrees();
```

- *Type:* java.lang.Number

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

##### `longDirection`<sup>Optional</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection"></a>

```java
public java.lang.String getLongDirection();
```

- *Type:* java.lang.String

Longitude direction. Available values: "E", "W".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

##### `longMinutes`<sup>Optional</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes"></a>

```java
public java.lang.Number getLongMinutes();
```

- *Type:* java.lang.Number

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

##### `longSeconds`<sup>Optional</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds"></a>

```java
public java.lang.Number getLongSeconds();
```

- *Type:* java.lang.Number

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

##### `matchingType`<sup>Optional</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType"></a>

```java
public java.lang.Number getMatchingType();
```

- *Type:* java.lang.Number

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#order DnsRecord#order}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#port DnsRecord#port}

---

##### `precisionHorz`<sup>Optional</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz"></a>

```java
public java.lang.Number getPrecisionHorz();
```

- *Type:* java.lang.Number

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

##### `precisionVert`<sup>Optional</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert"></a>

```java
public java.lang.Number getPrecisionVert();
```

- *Type:* java.lang.Number

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference"></a>

```java
public java.lang.Number getPreference();
```

- *Type:* java.lang.Number

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#preference DnsRecord#preference}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#regex DnsRecord#regex}

---

##### `replacement`<sup>Optional</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector"></a>

```java
public java.lang.Number getSelector();
```

- *Type:* java.lang.Number

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#selector DnsRecord#selector}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#service DnsRecord#service}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#size DnsRecord#size}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#tag DnsRecord#tag}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#target DnsRecord#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage"></a>

```java
public java.lang.Number getUsage();
```

- *Type:* java.lang.Number

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#usage DnsRecord#usage}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#value DnsRecord#value}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#weight DnsRecord#weight}

---

### DnsRecordSettings <a name="DnsRecordSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecordSettings;

DnsRecordSettings.builder()
//  .flattenCname(java.lang.Boolean)
//  .flattenCname(IResolvable)
//  .ipv4Only(java.lang.Boolean)
//  .ipv4Only(IResolvable)
//  .ipv6Only(java.lang.Boolean)
//  .ipv6Only(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname">flattenCname</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only">ipv4Only</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, only A records will be generated, and AAAA records will not be created. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only">ipv6Only</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, only AAAA records will be generated, and A records will not be created. |

---

##### `flattenCname`<sup>Optional</sup> <a name="flattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname"></a>

```java
public java.lang.Object getFlattenCname();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

##### `ipv4Only`<sup>Optional</sup> <a name="ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only"></a>

```java
public java.lang.Object getIpv4Only();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

##### `ipv6Only`<sup>Optional</sup> <a name="ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only"></a>

```java
public java.lang.Object getIpv6Only();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordDataOutputReference <a name="DnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecordDataOutputReference;

new DnsRecordDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude">resetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags">resetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees">resetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection">resetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes">resetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds">resetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees">resetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection">resetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes">resetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds">resetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType">resetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz">resetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert">resetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement">resetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage">resetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetAltitude` <a name="resetAltitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude"></a>

```java
public void resetAltitude()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest"></a>

```java
public void resetDigest()
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType"></a>

```java
public void resetDigestType()
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint"></a>

```java
public void resetFingerprint()
```

##### `resetFlags` <a name="resetFlags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags"></a>

```java
public void resetFlags()
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag"></a>

```java
public void resetKeyTag()
```

##### `resetLatDegrees` <a name="resetLatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees"></a>

```java
public void resetLatDegrees()
```

##### `resetLatDirection` <a name="resetLatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection"></a>

```java
public void resetLatDirection()
```

##### `resetLatMinutes` <a name="resetLatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes"></a>

```java
public void resetLatMinutes()
```

##### `resetLatSeconds` <a name="resetLatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds"></a>

```java
public void resetLatSeconds()
```

##### `resetLongDegrees` <a name="resetLongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees"></a>

```java
public void resetLongDegrees()
```

##### `resetLongDirection` <a name="resetLongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection"></a>

```java
public void resetLongDirection()
```

##### `resetLongMinutes` <a name="resetLongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes"></a>

```java
public void resetLongMinutes()
```

##### `resetLongSeconds` <a name="resetLongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds"></a>

```java
public void resetLongSeconds()
```

##### `resetMatchingType` <a name="resetMatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType"></a>

```java
public void resetMatchingType()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrecisionHorz` <a name="resetPrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz"></a>

```java
public void resetPrecisionHorz()
```

##### `resetPrecisionVert` <a name="resetPrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert"></a>

```java
public void resetPrecisionVert()
```

##### `resetPreference` <a name="resetPreference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetReplacement` <a name="resetReplacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement"></a>

```java
public void resetReplacement()
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize"></a>

```java
public void resetSize()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag"></a>

```java
public void resetTag()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUsage` <a name="resetUsage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage"></a>

```java
public void resetUsage()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput">altitudeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput">digestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput">flagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput">latDegreesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput">latDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput">latMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput">latSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput">longDegreesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput">longDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput">longMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput">longSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput">matchingTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput">precisionHorzInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput">precisionVertInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput">publicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput">replacementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput">usageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude">altitude</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest">digest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType">digestType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags">flags</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag">keyTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees">latDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection">latDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes">latMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds">latSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees">longDegrees</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection">longDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes">longMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds">longSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType">matchingType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz">precisionHorz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert">precisionVert</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference">preference</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol">protocol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement">replacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector">selector</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage">usage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput"></a>

```java
public java.lang.Number getAlgorithmInput();
```

- *Type:* java.lang.Number

---

##### `altitudeInput`<sup>Optional</sup> <a name="altitudeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput"></a>

```java
public java.lang.Number getAltitudeInput();
```

- *Type:* java.lang.Number

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput"></a>

```java
public java.lang.String getDigestInput();
```

- *Type:* java.lang.String

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput"></a>

```java
public java.lang.Number getDigestTypeInput();
```

- *Type:* java.lang.Number

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `flagsInput`<sup>Optional</sup> <a name="flagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getFlagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput"></a>

```java
public java.lang.Number getKeyTagInput();
```

- *Type:* java.lang.Number

---

##### `latDegreesInput`<sup>Optional</sup> <a name="latDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput"></a>

```java
public java.lang.Number getLatDegreesInput();
```

- *Type:* java.lang.Number

---

##### `latDirectionInput`<sup>Optional</sup> <a name="latDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput"></a>

```java
public java.lang.String getLatDirectionInput();
```

- *Type:* java.lang.String

---

##### `latMinutesInput`<sup>Optional</sup> <a name="latMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput"></a>

```java
public java.lang.Number getLatMinutesInput();
```

- *Type:* java.lang.Number

---

##### `latSecondsInput`<sup>Optional</sup> <a name="latSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput"></a>

```java
public java.lang.Number getLatSecondsInput();
```

- *Type:* java.lang.Number

---

##### `longDegreesInput`<sup>Optional</sup> <a name="longDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput"></a>

```java
public java.lang.Number getLongDegreesInput();
```

- *Type:* java.lang.Number

---

##### `longDirectionInput`<sup>Optional</sup> <a name="longDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput"></a>

```java
public java.lang.String getLongDirectionInput();
```

- *Type:* java.lang.String

---

##### `longMinutesInput`<sup>Optional</sup> <a name="longMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput"></a>

```java
public java.lang.Number getLongMinutesInput();
```

- *Type:* java.lang.Number

---

##### `longSecondsInput`<sup>Optional</sup> <a name="longSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput"></a>

```java
public java.lang.Number getLongSecondsInput();
```

- *Type:* java.lang.Number

---

##### `matchingTypeInput`<sup>Optional</sup> <a name="matchingTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput"></a>

```java
public java.lang.Number getMatchingTypeInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `precisionHorzInput`<sup>Optional</sup> <a name="precisionHorzInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput"></a>

```java
public java.lang.Number getPrecisionHorzInput();
```

- *Type:* java.lang.Number

---

##### `precisionVertInput`<sup>Optional</sup> <a name="precisionVertInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput"></a>

```java
public java.lang.Number getPrecisionVertInput();
```

- *Type:* java.lang.Number

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput"></a>

```java
public java.lang.Number getPreferenceInput();
```

- *Type:* java.lang.Number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput"></a>

```java
public java.lang.Number getProtocolInput();
```

- *Type:* java.lang.Number

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput"></a>

```java
public java.lang.String getPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `replacementInput`<sup>Optional</sup> <a name="replacementInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput"></a>

```java
public java.lang.String getReplacementInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput"></a>

```java
public java.lang.Number getSelectorInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput"></a>

```java
public java.lang.Number getUsageInput();
```

- *Type:* java.lang.Number

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm"></a>

```java
public java.lang.Number getAlgorithm();
```

- *Type:* java.lang.Number

---

##### `altitude`<sup>Required</sup> <a name="altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude"></a>

```java
public java.lang.Number getAltitude();
```

- *Type:* java.lang.Number

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest"></a>

```java
public java.lang.String getDigest();
```

- *Type:* java.lang.String

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType"></a>

```java
public java.lang.Number getDigestType();
```

- *Type:* java.lang.Number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getFlags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag"></a>

```java
public java.lang.Number getKeyTag();
```

- *Type:* java.lang.Number

---

##### `latDegrees`<sup>Required</sup> <a name="latDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees"></a>

```java
public java.lang.Number getLatDegrees();
```

- *Type:* java.lang.Number

---

##### `latDirection`<sup>Required</sup> <a name="latDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection"></a>

```java
public java.lang.String getLatDirection();
```

- *Type:* java.lang.String

---

##### `latMinutes`<sup>Required</sup> <a name="latMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes"></a>

```java
public java.lang.Number getLatMinutes();
```

- *Type:* java.lang.Number

---

##### `latSeconds`<sup>Required</sup> <a name="latSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds"></a>

```java
public java.lang.Number getLatSeconds();
```

- *Type:* java.lang.Number

---

##### `longDegrees`<sup>Required</sup> <a name="longDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees"></a>

```java
public java.lang.Number getLongDegrees();
```

- *Type:* java.lang.Number

---

##### `longDirection`<sup>Required</sup> <a name="longDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection"></a>

```java
public java.lang.String getLongDirection();
```

- *Type:* java.lang.String

---

##### `longMinutes`<sup>Required</sup> <a name="longMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes"></a>

```java
public java.lang.Number getLongMinutes();
```

- *Type:* java.lang.Number

---

##### `longSeconds`<sup>Required</sup> <a name="longSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds"></a>

```java
public java.lang.Number getLongSeconds();
```

- *Type:* java.lang.Number

---

##### `matchingType`<sup>Required</sup> <a name="matchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType"></a>

```java
public java.lang.Number getMatchingType();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `precisionHorz`<sup>Required</sup> <a name="precisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz"></a>

```java
public java.lang.Number getPrecisionHorz();
```

- *Type:* java.lang.Number

---

##### `precisionVert`<sup>Required</sup> <a name="precisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert"></a>

```java
public java.lang.Number getPrecisionVert();
```

- *Type:* java.lang.Number

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference"></a>

```java
public java.lang.Number getPreference();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol"></a>

```java
public java.lang.Number getProtocol();
```

- *Type:* java.lang.Number

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `replacement`<sup>Required</sup> <a name="replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement"></a>

```java
public java.lang.String getReplacement();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector"></a>

```java
public java.lang.Number getSelector();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage"></a>

```java
public java.lang.Number getUsage();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---


### DnsRecordSettingsOutputReference <a name="DnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dns_record.DnsRecordSettingsOutputReference;

new DnsRecordSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname">resetFlattenCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only">resetIpv4Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only">resetIpv6Only</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlattenCname` <a name="resetFlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname"></a>

```java
public void resetFlattenCname()
```

##### `resetIpv4Only` <a name="resetIpv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only"></a>

```java
public void resetIpv4Only()
```

##### `resetIpv6Only` <a name="resetIpv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only"></a>

```java
public void resetIpv6Only()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput">flattenCnameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput">ipv4OnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput">ipv6OnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname">flattenCname</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only">ipv4Only</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only">ipv6Only</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flattenCnameInput`<sup>Optional</sup> <a name="flattenCnameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput"></a>

```java
public java.lang.Object getFlattenCnameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4OnlyInput`<sup>Optional</sup> <a name="ipv4OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput"></a>

```java
public java.lang.Object getIpv4OnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv6OnlyInput`<sup>Optional</sup> <a name="ipv6OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput"></a>

```java
public java.lang.Object getIpv6OnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flattenCname`<sup>Required</sup> <a name="flattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname"></a>

```java
public java.lang.Object getFlattenCname();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv4Only`<sup>Required</sup> <a name="ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only"></a>

```java
public java.lang.Object getIpv4Only();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipv6Only`<sup>Required</sup> <a name="ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only"></a>

```java
public java.lang.Object getIpv6Only();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---



