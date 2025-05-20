# `zoneDnsSettings` Submodule <a name="`zoneDnsSettings` Submodule" id="@cdktf/provider-cloudflare.zoneDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneDnsSettings <a name="ZoneDnsSettings" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings cloudflare_zone_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettings;

ZoneDnsSettings.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
//  .flattenAllCnames(java.lang.Boolean)
//  .flattenAllCnames(IResolvable)
//  .foundationDns(java.lang.Boolean)
//  .foundationDns(IResolvable)
//  .internalDns(ZoneDnsSettingsInternalDns)
//  .multiProvider(java.lang.Boolean)
//  .multiProvider(IResolvable)
//  .nameservers(ZoneDnsSettingsNameservers)
//  .nsTtl(java.lang.Number)
//  .secondaryOverrides(java.lang.Boolean)
//  .secondaryOverrides(IResolvable)
//  .soa(ZoneDnsSettingsSoa)
//  .zoneMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_id ZoneDnsSettings#zone_id}

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.flattenAllCnames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#flatten_all_cnames ZoneDnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.foundationDns"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#foundation_dns ZoneDnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.internalDns"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#internal_dns ZoneDnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.multiProvider"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#multi_provider ZoneDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.nameservers"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#nameservers ZoneDnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.nsTtl"></a>

- *Type:* java.lang.Number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ns_ttl ZoneDnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.secondaryOverrides"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#secondary_overrides ZoneDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.soa"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#soa ZoneDnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.Initializer.parameter.zoneMode"></a>

- *Type:* java.lang.String

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_mode ZoneDnsSettings#zone_mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns">putInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers">putNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames">resetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns">resetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns">resetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider">resetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl">resetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides">resetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa">resetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode">resetZoneMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInternalDns` <a name="putInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns"></a>

```java
public void putInternalDns(ZoneDnsSettingsInternalDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---

##### `putNameservers` <a name="putNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers"></a>

```java
public void putNameservers(ZoneDnsSettingsNameservers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---

##### `putSoa` <a name="putSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa"></a>

```java
public void putSoa(ZoneDnsSettingsSoa value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---

##### `resetFlattenAllCnames` <a name="resetFlattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFlattenAllCnames"></a>

```java
public void resetFlattenAllCnames()
```

##### `resetFoundationDns` <a name="resetFoundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetFoundationDns"></a>

```java
public void resetFoundationDns()
```

##### `resetInternalDns` <a name="resetInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetInternalDns"></a>

```java
public void resetInternalDns()
```

##### `resetMultiProvider` <a name="resetMultiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetMultiProvider"></a>

```java
public void resetMultiProvider()
```

##### `resetNameservers` <a name="resetNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNameservers"></a>

```java
public void resetNameservers()
```

##### `resetNsTtl` <a name="resetNsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetNsTtl"></a>

```java
public void resetNsTtl()
```

##### `resetSecondaryOverrides` <a name="resetSecondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSecondaryOverrides"></a>

```java
public void resetSecondaryOverrides()
```

##### `resetSoa` <a name="resetSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetSoa"></a>

```java
public void resetSoa()
```

##### `resetZoneMode` <a name="resetZoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.resetZoneMode"></a>

```java
public void resetZoneMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettings;

ZoneDnsSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettings;

ZoneDnsSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettings;

ZoneDnsSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettings;

ZoneDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZoneDnsSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZoneDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZoneDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZoneDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZoneDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput">flattenAllCnamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput">foundationDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput">internalDnsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput">multiProviderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput">nameserversInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput">nsTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput">secondaryOverridesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput">soaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput">zoneModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `internalDns`<sup>Required</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDns"></a>

```java
public ZoneDnsSettingsInternalDnsOutputReference getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference">ZoneDnsSettingsInternalDnsOutputReference</a>

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameservers"></a>

```java
public ZoneDnsSettingsNameserversOutputReference getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference">ZoneDnsSettingsNameserversOutputReference</a>

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soa"></a>

```java
public ZoneDnsSettingsSoaOutputReference getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference">ZoneDnsSettingsSoaOutputReference</a>

---

##### `flattenAllCnamesInput`<sup>Optional</sup> <a name="flattenAllCnamesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnamesInput"></a>

```java
public java.lang.Object getFlattenAllCnamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `foundationDnsInput`<sup>Optional</sup> <a name="foundationDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDnsInput"></a>

```java
public java.lang.Object getFoundationDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalDnsInput`<sup>Optional</sup> <a name="internalDnsInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.internalDnsInput"></a>

```java
public java.lang.Object getInternalDnsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---

##### `multiProviderInput`<sup>Optional</sup> <a name="multiProviderInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProviderInput"></a>

```java
public java.lang.Object getMultiProviderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nameserversInput"></a>

```java
public java.lang.Object getNameserversInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---

##### `nsTtlInput`<sup>Optional</sup> <a name="nsTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtlInput"></a>

```java
public java.lang.Number getNsTtlInput();
```

- *Type:* java.lang.Number

---

##### `secondaryOverridesInput`<sup>Optional</sup> <a name="secondaryOverridesInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverridesInput"></a>

```java
public java.lang.Object getSecondaryOverridesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.soaInput"></a>

```java
public java.lang.Object getSoaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `zoneModeInput`<sup>Optional</sup> <a name="zoneModeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneModeInput"></a>

```java
public java.lang.String getZoneModeInput();
```

- *Type:* java.lang.String

---

##### `flattenAllCnames`<sup>Required</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.flattenAllCnames"></a>

```java
public java.lang.Object getFlattenAllCnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `foundationDns`<sup>Required</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.foundationDns"></a>

```java
public java.lang.Object getFoundationDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `multiProvider`<sup>Required</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.multiProvider"></a>

```java
public java.lang.Object getMultiProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nsTtl`<sup>Required</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

---

##### `secondaryOverrides`<sup>Required</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.secondaryOverrides"></a>

```java
public java.lang.Object getSecondaryOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `zoneMode`<sup>Required</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneDnsSettingsConfig <a name="ZoneDnsSettingsConfig" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsConfig;

ZoneDnsSettingsConfig.builder()
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
    .zoneId(java.lang.String)
//  .flattenAllCnames(java.lang.Boolean)
//  .flattenAllCnames(IResolvable)
//  .foundationDns(java.lang.Boolean)
//  .foundationDns(IResolvable)
//  .internalDns(ZoneDnsSettingsInternalDns)
//  .multiProvider(java.lang.Boolean)
//  .multiProvider(IResolvable)
//  .nameservers(ZoneDnsSettingsNameservers)
//  .nsTtl(java.lang.Number)
//  .secondaryOverrides(java.lang.Boolean)
//  .secondaryOverrides(IResolvable)
//  .soa(ZoneDnsSettingsSoa)
//  .zoneMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames">flattenAllCnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns">foundationDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns">internalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider">multiProvider</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl">nsTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides">secondaryOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa">soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode">zoneMode</a></code> | <code>java.lang.String</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_id ZoneDnsSettings#zone_id}

---

##### `flattenAllCnames`<sup>Optional</sup> <a name="flattenAllCnames" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.flattenAllCnames"></a>

```java
public java.lang.Object getFlattenAllCnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#flatten_all_cnames ZoneDnsSettings#flatten_all_cnames}

---

##### `foundationDns`<sup>Optional</sup> <a name="foundationDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.foundationDns"></a>

```java
public java.lang.Object getFoundationDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#foundation_dns ZoneDnsSettings#foundation_dns}

---

##### `internalDns`<sup>Optional</sup> <a name="internalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.internalDns"></a>

```java
public ZoneDnsSettingsInternalDns getInternalDns();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#internal_dns ZoneDnsSettings#internal_dns}

---

##### `multiProvider`<sup>Optional</sup> <a name="multiProvider" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.multiProvider"></a>

```java
public java.lang.Object getMultiProvider();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#multi_provider ZoneDnsSettings#multi_provider}

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nameservers"></a>

```java
public ZoneDnsSettingsNameservers getNameservers();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#nameservers ZoneDnsSettings#nameservers}

---

##### `nsTtl`<sup>Optional</sup> <a name="nsTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.nsTtl"></a>

```java
public java.lang.Number getNsTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ns_ttl ZoneDnsSettings#ns_ttl}

---

##### `secondaryOverrides`<sup>Optional</sup> <a name="secondaryOverrides" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.secondaryOverrides"></a>

```java
public java.lang.Object getSecondaryOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#secondary_overrides ZoneDnsSettings#secondary_overrides}

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.soa"></a>

```java
public ZoneDnsSettingsSoa getSoa();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#soa ZoneDnsSettings#soa}

---

##### `zoneMode`<sup>Optional</sup> <a name="zoneMode" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsConfig.property.zoneMode"></a>

```java
public java.lang.String getZoneMode();
```

- *Type:* java.lang.String

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#zone_mode ZoneDnsSettings#zone_mode}

---

### ZoneDnsSettingsInternalDns <a name="ZoneDnsSettingsInternalDns" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsInternalDns;

ZoneDnsSettingsInternalDns.builder()
//  .referenceZoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | The ID of the zone to fallback to. |

---

##### `referenceZoneId`<sup>Optional</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#reference_zone_id ZoneDnsSettings#reference_zone_id}

---

### ZoneDnsSettingsNameservers <a name="ZoneDnsSettingsNameservers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsNameservers;

ZoneDnsSettingsNameservers.builder()
    .type(java.lang.String)
//  .nsSet(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type">type</a></code> | <code>java.lang.String</code> | Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone". |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet">nsSet</a></code> | <code>java.lang.Number</code> | Configured nameserver set to be used for this zone. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Nameserver type Available values: "cloudflare.standard", "custom.account", "custom.tenant", "custom.zone".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#type ZoneDnsSettings#type}

---

##### `nsSet`<sup>Optional</sup> <a name="nsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers.property.nsSet"></a>

```java
public java.lang.Number getNsSet();
```

- *Type:* java.lang.Number

Configured nameserver set to be used for this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ns_set ZoneDnsSettings#ns_set}

---

### ZoneDnsSettingsSoa <a name="ZoneDnsSettingsSoa" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsSoa;

ZoneDnsSettingsSoa.builder()
    .expire(java.lang.Number)
    .minTtl(java.lang.Number)
    .mname(java.lang.String)
    .refresh(java.lang.Number)
    .retry(java.lang.Number)
    .rname(java.lang.String)
    .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire">expire</a></code> | <code>java.lang.Number</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname">mname</a></code> | <code>java.lang.String</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry">retry</a></code> | <code>java.lang.Number</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname">rname</a></code> | <code>java.lang.String</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The time to live (TTL) of the SOA record itself. |

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#expire ZoneDnsSettings#expire}

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#min_ttl ZoneDnsSettings#min_ttl}

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#mname ZoneDnsSettings#mname}

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#refresh ZoneDnsSettings#refresh}

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#retry ZoneDnsSettings#retry}

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#rname ZoneDnsSettings#rname}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/zone_dns_settings#ttl ZoneDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneDnsSettingsInternalDnsOutputReference <a name="ZoneDnsSettingsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsInternalDnsOutputReference;

new ZoneDnsSettingsInternalDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId">resetReferenceZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceZoneId` <a name="resetReferenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.resetReferenceZoneId"></a>

```java
public void resetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput">referenceZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId">referenceZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceZoneIdInput`<sup>Optional</sup> <a name="referenceZoneIdInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```java
public java.lang.String getReferenceZoneIdInput();
```

- *Type:* java.lang.String

---

##### `referenceZoneId`<sup>Required</sup> <a name="referenceZoneId" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.referenceZoneId"></a>

```java
public java.lang.String getReferenceZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDnsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsInternalDns">ZoneDnsSettingsInternalDns</a>

---


### ZoneDnsSettingsNameserversOutputReference <a name="ZoneDnsSettingsNameserversOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsNameserversOutputReference;

new ZoneDnsSettingsNameserversOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet">resetNsSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsSet` <a name="resetNsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.resetNsSet"></a>

```java
public void resetNsSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput">nsSetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet">nsSet</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsSetInput`<sup>Optional</sup> <a name="nsSetInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSetInput"></a>

```java
public java.lang.Number getNsSetInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `nsSet`<sup>Required</sup> <a name="nsSet" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.nsSet"></a>

```java
public java.lang.Number getNsSet();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameserversOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsNameservers">ZoneDnsSettingsNameservers</a>

---


### ZoneDnsSettingsSoaOutputReference <a name="ZoneDnsSettingsSoaOutputReference" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_dns_settings.ZoneDnsSettingsSoaOutputReference;

new ZoneDnsSettingsSoaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput">expireInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput">minTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput">mnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput">refreshInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput">retryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput">rnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire">expire</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl">minTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname">mname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh">refresh</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry">retry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname">rname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireInput`<sup>Optional</sup> <a name="expireInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expireInput"></a>

```java
public java.lang.Number getExpireInput();
```

- *Type:* java.lang.Number

---

##### `minTtlInput`<sup>Optional</sup> <a name="minTtlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtlInput"></a>

```java
public java.lang.Number getMinTtlInput();
```

- *Type:* java.lang.Number

---

##### `mnameInput`<sup>Optional</sup> <a name="mnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mnameInput"></a>

```java
public java.lang.String getMnameInput();
```

- *Type:* java.lang.String

---

##### `refreshInput`<sup>Optional</sup> <a name="refreshInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refreshInput"></a>

```java
public java.lang.Number getRefreshInput();
```

- *Type:* java.lang.Number

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retryInput"></a>

```java
public java.lang.Number getRetryInput();
```

- *Type:* java.lang.Number

---

##### `rnameInput`<sup>Optional</sup> <a name="rnameInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rnameInput"></a>

```java
public java.lang.String getRnameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `expire`<sup>Required</sup> <a name="expire" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.expire"></a>

```java
public java.lang.Number getExpire();
```

- *Type:* java.lang.Number

---

##### `minTtl`<sup>Required</sup> <a name="minTtl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.minTtl"></a>

```java
public java.lang.Number getMinTtl();
```

- *Type:* java.lang.Number

---

##### `mname`<sup>Required</sup> <a name="mname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.mname"></a>

```java
public java.lang.String getMname();
```

- *Type:* java.lang.String

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.refresh"></a>

```java
public java.lang.Number getRefresh();
```

- *Type:* java.lang.Number

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.retry"></a>

```java
public java.lang.Number getRetry();
```

- *Type:* java.lang.Number

---

##### `rname`<sup>Required</sup> <a name="rname" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.rname"></a>

```java
public java.lang.String getRname();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneDnsSettings.ZoneDnsSettingsSoa">ZoneDnsSettingsSoa</a>

---



