# `magicTransitSiteLan` Submodule <a name="`magicTransitSiteLan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteLan <a name="MagicTransitSiteLan" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLan;

MagicTransitSiteLan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .physport(java.lang.Number)
    .siteId(java.lang.String)
//  .haLink(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .nat(MagicTransitSiteLanNat)
//  .routedSubnets(IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets>)
//  .staticAddressing(MagicTransitSiteLanStaticAddressing)
//  .vlanTag(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.physport">physport</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.haLink">haLink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | mark true to use this LAN for HA probing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.routedSubnets">routedSubnets</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | VLAN ID. Use zero for untagged. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.physport"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}

---

##### `haLink`<sup>Optional</sup> <a name="haLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.haLink"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

mark true to use this LAN for HA probing.

only works for site with HA turned on. only one LAN can be set as the ha_link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.nat"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

##### `routedSubnets`<sup>Optional</sup> <a name="routedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.routedSubnets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.staticAddressing"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP).

However, if in high availability mode, static_address is required along with secondary and virtual address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.vlanTag"></a>

- *Type:* java.lang.Number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat">putNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets">putRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing">putStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink">resetHaLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat">resetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets">resetRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing">resetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag">resetVlanTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNat` <a name="putNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat"></a>

```java
public void putNat(MagicTransitSiteLanNat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `putRoutedSubnets` <a name="putRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets"></a>

```java
public void putRoutedSubnets(IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>>

---

##### `putStaticAddressing` <a name="putStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing"></a>

```java
public void putStaticAddressing(MagicTransitSiteLanStaticAddressing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `resetHaLink` <a name="resetHaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink"></a>

```java
public void resetHaLink()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName"></a>

```java
public void resetName()
```

##### `resetNat` <a name="resetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat"></a>

```java
public void resetNat()
```

##### `resetRoutedSubnets` <a name="resetRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets"></a>

```java
public void resetRoutedSubnets()
```

##### `resetStaticAddressing` <a name="resetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing"></a>

```java
public void resetStaticAddressing()
```

##### `resetVlanTag` <a name="resetVlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag"></a>

```java
public void resetVlanTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLan;

MagicTransitSiteLan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLan;

MagicTransitSiteLan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLan;

MagicTransitSiteLan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLan;

MagicTransitSiteLan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MagicTransitSiteLan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MagicTransitSiteLan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets">routedSubnets</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput">haLinkInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput">natInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput">physportInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput">routedSubnetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput">staticAddressingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput">vlanTagInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink">haLink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport">physport</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat"></a>

```java
public MagicTransitSiteLanNatOutputReference getNat();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a>

---

##### `routedSubnets`<sup>Required</sup> <a name="routedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets"></a>

```java
public MagicTransitSiteLanRoutedSubnetsList getRoutedSubnets();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a>

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing"></a>

```java
public MagicTransitSiteLanStaticAddressingOutputReference getStaticAddressing();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `haLinkInput`<sup>Optional</sup> <a name="haLinkInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput"></a>

```java
public java.lang.Boolean|IResolvable getHaLinkInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput"></a>

```java
public IResolvable|MagicTransitSiteLanNat getNatInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `physportInput`<sup>Optional</sup> <a name="physportInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput"></a>

```java
public java.lang.Number getPhysportInput();
```

- *Type:* java.lang.Number

---

##### `routedSubnetsInput`<sup>Optional</sup> <a name="routedSubnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput"></a>

```java
public IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets> getRoutedSubnetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>>

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `staticAddressingInput`<sup>Optional</sup> <a name="staticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressing getStaticAddressingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `vlanTagInput`<sup>Optional</sup> <a name="vlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput"></a>

```java
public java.lang.Number getVlanTagInput();
```

- *Type:* java.lang.Number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `haLink`<sup>Required</sup> <a name="haLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink"></a>

```java
public java.lang.Boolean|IResolvable getHaLink();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteLanConfig <a name="MagicTransitSiteLanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanConfig;

MagicTransitSiteLanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .physport(java.lang.Number)
    .siteId(java.lang.String)
//  .haLink(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .nat(MagicTransitSiteLanNat)
//  .routedSubnets(IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets>)
//  .staticAddressing(MagicTransitSiteLanStaticAddressing)
//  .vlanTag(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport">physport</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink">haLink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | mark true to use this LAN for HA probing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets">routedSubnets</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | VLAN ID. Use zero for untagged. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport"></a>

```java
public java.lang.Number getPhysport();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}.

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}

---

##### `haLink`<sup>Optional</sup> <a name="haLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink"></a>

```java
public java.lang.Boolean|IResolvable getHaLink();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

mark true to use this LAN for HA probing.

only works for site with HA turned on. only one LAN can be set as the ha_link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat"></a>

```java
public MagicTransitSiteLanNat getNat();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

##### `routedSubnets`<sup>Optional</sup> <a name="routedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets"></a>

```java
public IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets> getRoutedSubnets();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}.

---

##### `staticAddressing`<sup>Optional</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing"></a>

```java
public MagicTransitSiteLanStaticAddressing getStaticAddressing();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP).

However, if in high availability mode, static_address is required along with secondary and virtual address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}

---

##### `vlanTag`<sup>Optional</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}

---

### MagicTransitSiteLanNat <a name="MagicTransitSiteLanNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanNat;

MagicTransitSiteLanNat.builder()
//  .staticPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |

---

##### `staticPrefix`<sup>Optional</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanRoutedSubnets <a name="MagicTransitSiteLanRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanRoutedSubnets;

MagicTransitSiteLanRoutedSubnets.builder()
    .nextHop(java.lang.String)
    .prefix(java.lang.String)
//  .nat(MagicTransitSiteLanRoutedSubnetsNat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix">prefix</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat"></a>

```java
public MagicTransitSiteLanRoutedSubnetsNat getNat();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

### MagicTransitSiteLanRoutedSubnetsNat <a name="MagicTransitSiteLanRoutedSubnetsNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanRoutedSubnetsNat;

MagicTransitSiteLanRoutedSubnetsNat.builder()
//  .staticPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |

---

##### `staticPrefix`<sup>Optional</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanStaticAddressing <a name="MagicTransitSiteLanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressing;

MagicTransitSiteLanStaticAddressing.builder()
    .address(java.lang.String)
//  .dhcpRelay(MagicTransitSiteLanStaticAddressingDhcpRelay)
//  .dhcpServer(MagicTransitSiteLanStaticAddressingDhcpServer)
//  .secondaryAddress(java.lang.String)
//  .virtualAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address">address</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress">virtualAddress</a></code> | <code>java.lang.String</code> | A valid CIDR notation representing an IP range. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}

---

##### `dhcpRelay`<sup>Optional</sup> <a name="dhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay"></a>

```java
public MagicTransitSiteLanStaticAddressingDhcpRelay getDhcpRelay();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}.

---

##### `dhcpServer`<sup>Optional</sup> <a name="dhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer"></a>

```java
public MagicTransitSiteLanStaticAddressingDhcpServer getDhcpServer();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}.

---

##### `secondaryAddress`<sup>Optional</sup> <a name="secondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}

---

##### `virtualAddress`<sup>Optional</sup> <a name="virtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress"></a>

```java
public java.lang.String getVirtualAddress();
```

- *Type:* java.lang.String

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}

---

### MagicTransitSiteLanStaticAddressingDhcpRelay <a name="MagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressingDhcpRelay;

MagicTransitSiteLanStaticAddressingDhcpRelay.builder()
//  .serverAddresses(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses">serverAddresses</a></code> | <code>java.util.List<java.lang.String></code> | List of DHCP server IPs. |

---

##### `serverAddresses`<sup>Optional</sup> <a name="serverAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses"></a>

```java
public java.util.List<java.lang.String> getServerAddresses();
```

- *Type:* java.util.List<java.lang.String>

List of DHCP server IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}

---

### MagicTransitSiteLanStaticAddressingDhcpServer <a name="MagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressingDhcpServer;

MagicTransitSiteLanStaticAddressingDhcpServer.builder()
//  .dhcpPoolEnd(java.lang.String)
//  .dhcpPoolStart(java.lang.String)
//  .dnsServer(java.lang.String)
//  .dnsServers(java.util.List<java.lang.String>)
//  .reservations(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer">dnsServer</a></code> | <code>java.lang.String</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations">reservations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of MAC addresses to IP addresses. |

---

##### `dhcpPoolEnd`<sup>Optional</sup> <a name="dhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd"></a>

```java
public java.lang.String getDhcpPoolEnd();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}

---

##### `dhcpPoolStart`<sup>Optional</sup> <a name="dhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart"></a>

```java
public java.lang.String getDhcpPoolStart();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}

---

##### `dnsServer`<sup>Optional</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer"></a>

```java
public java.lang.String getDnsServer();
```

- *Type:* java.lang.String

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}.

---

##### `reservations`<sup>Optional</sup> <a name="reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReservations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of MAC addresses to IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLanNatOutputReference <a name="MagicTransitSiteLanNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanNatOutputReference;

new MagicTransitSiteLanNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix">resetStaticPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStaticPrefix` <a name="resetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix"></a>

```java
public void resetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput">staticPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticPrefixInput`<sup>Optional</sup> <a name="staticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput"></a>

```java
public java.lang.String getStaticPrefixInput();
```

- *Type:* java.lang.String

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanNat getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---


### MagicTransitSiteLanRoutedSubnetsList <a name="MagicTransitSiteLanRoutedSubnetsList" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanRoutedSubnetsList;

new MagicTransitSiteLanRoutedSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get"></a>

```java
public MagicTransitSiteLanRoutedSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MagicTransitSiteLanRoutedSubnets> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>>

---


### MagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="MagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanRoutedSubnetsNatOutputReference;

new MagicTransitSiteLanRoutedSubnetsNatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix">resetStaticPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStaticPrefix` <a name="resetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix"></a>

```java
public void resetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput">staticPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `staticPrefixInput`<sup>Optional</sup> <a name="staticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput"></a>

```java
public java.lang.String getStaticPrefixInput();
```

- *Type:* java.lang.String

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```java
public java.lang.String getStaticPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanRoutedSubnetsNat getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---


### MagicTransitSiteLanRoutedSubnetsOutputReference <a name="MagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanRoutedSubnetsOutputReference;

new MagicTransitSiteLanRoutedSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat">putNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat">resetNat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNat` <a name="putNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat"></a>

```java
public void putNat(MagicTransitSiteLanRoutedSubnetsNat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `resetNat` <a name="resetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat"></a>

```java
public void resetNat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput">natInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput">nextHopInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">nextHop</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```java
public MagicTransitSiteLanRoutedSubnetsNatOutputReference getNat();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput"></a>

```java
public IResolvable|MagicTransitSiteLanRoutedSubnetsNat getNatInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `nextHopInput`<sup>Optional</sup> <a name="nextHopInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput"></a>

```java
public java.lang.String getNextHopInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```java
public java.lang.String getNextHop();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanRoutedSubnets getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets">MagicTransitSiteLanRoutedSubnets</a>

---


### MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference;

new MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses">resetServerAddresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerAddresses` <a name="resetServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses"></a>

```java
public void resetServerAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput">serverAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">serverAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverAddressesInput`<sup>Optional</sup> <a name="serverAddressesInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput"></a>

```java
public java.util.List<java.lang.String> getServerAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverAddresses`<sup>Required</sup> <a name="serverAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```java
public java.util.List<java.lang.String> getServerAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressingDhcpRelay getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---


### MagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference;

new MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd">resetDhcpPoolEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart">resetDhcpPoolStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer">resetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers">resetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations">resetReservations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDhcpPoolEnd` <a name="resetDhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd"></a>

```java
public void resetDhcpPoolEnd()
```

##### `resetDhcpPoolStart` <a name="resetDhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart"></a>

```java
public void resetDhcpPoolStart()
```

##### `resetDnsServer` <a name="resetDnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer"></a>

```java
public void resetDnsServer()
```

##### `resetDnsServers` <a name="resetDnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers"></a>

```java
public void resetDnsServers()
```

##### `resetReservations` <a name="resetReservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations"></a>

```java
public void resetReservations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput">dhcpPoolEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput">dhcpPoolStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput">dnsServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput">dnsServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput">reservationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">dnsServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">reservations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhcpPoolEndInput`<sup>Optional</sup> <a name="dhcpPoolEndInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput"></a>

```java
public java.lang.String getDhcpPoolEndInput();
```

- *Type:* java.lang.String

---

##### `dhcpPoolStartInput`<sup>Optional</sup> <a name="dhcpPoolStartInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput"></a>

```java
public java.lang.String getDhcpPoolStartInput();
```

- *Type:* java.lang.String

---

##### `dnsServerInput`<sup>Optional</sup> <a name="dnsServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput"></a>

```java
public java.lang.String getDnsServerInput();
```

- *Type:* java.lang.String

---

##### `dnsServersInput`<sup>Optional</sup> <a name="dnsServersInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput"></a>

```java
public java.util.List<java.lang.String> getDnsServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservationsInput`<sup>Optional</sup> <a name="reservationsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReservationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dhcpPoolEnd`<sup>Required</sup> <a name="dhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```java
public java.lang.String getDhcpPoolEnd();
```

- *Type:* java.lang.String

---

##### `dhcpPoolStart`<sup>Required</sup> <a name="dhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```java
public java.lang.String getDhcpPoolStart();
```

- *Type:* java.lang.String

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```java
public java.lang.String getDnsServer();
```

- *Type:* java.lang.String

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `reservations`<sup>Required</sup> <a name="reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getReservations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressingDhcpServer getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---


### MagicTransitSiteLanStaticAddressingOutputReference <a name="MagicTransitSiteLanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.magic_transit_site_lan.MagicTransitSiteLanStaticAddressingOutputReference;

new MagicTransitSiteLanStaticAddressingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay">putDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer">putDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay">resetDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer">resetDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress">resetSecondaryAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress">resetVirtualAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDhcpRelay` <a name="putDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay"></a>

```java
public void putDhcpRelay(MagicTransitSiteLanStaticAddressingDhcpRelay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `putDhcpServer` <a name="putDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer"></a>

```java
public void putDhcpServer(MagicTransitSiteLanStaticAddressingDhcpServer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `resetDhcpRelay` <a name="resetDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay"></a>

```java
public void resetDhcpRelay()
```

##### `resetDhcpServer` <a name="resetDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer"></a>

```java
public void resetDhcpServer()
```

##### `resetSecondaryAddress` <a name="resetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```java
public void resetSecondaryAddress()
```

##### `resetVirtualAddress` <a name="resetVirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress"></a>

```java
public void resetVirtualAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput">dhcpRelayInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput">dhcpServerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput">secondaryAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput">virtualAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">virtualAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhcpRelay`<sup>Required</sup> <a name="dhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```java
public MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference getDhcpRelay();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `dhcpServer`<sup>Required</sup> <a name="dhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```java
public MagicTransitSiteLanStaticAddressingDhcpServerOutputReference getDhcpServer();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `dhcpRelayInput`<sup>Optional</sup> <a name="dhcpRelayInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressingDhcpRelay getDhcpRelayInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `dhcpServerInput`<sup>Optional</sup> <a name="dhcpServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressingDhcpServer getDhcpServerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `secondaryAddressInput`<sup>Optional</sup> <a name="secondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```java
public java.lang.String getSecondaryAddressInput();
```

- *Type:* java.lang.String

---

##### `virtualAddressInput`<sup>Optional</sup> <a name="virtualAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput"></a>

```java
public java.lang.String getVirtualAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```java
public java.lang.String getSecondaryAddress();
```

- *Type:* java.lang.String

---

##### `virtualAddress`<sup>Required</sup> <a name="virtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```java
public java.lang.String getVirtualAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```java
public IResolvable|MagicTransitSiteLanStaticAddressing getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---



