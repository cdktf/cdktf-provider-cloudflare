# `dnsFirewall` Submodule <a name="`dnsFirewall` Submodule" id="@cdktf/provider-cloudflare.dnsFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsFirewall <a name="DnsFirewall" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall cloudflare_dns_firewall}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsFirewall(Construct Scope, string Id, DnsFirewallConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig">DnsFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation">PutAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation">ResetAttackMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests">ResetDeprecateAnyRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback">ResetEcsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl">ResetMaximumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl">ResetMinimumCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl">ResetNegativeCacheTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit">ResetRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries">ResetRetries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttackMitigation` <a name="PutAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation"></a>

```csharp
private void PutAttackMitigation(DnsFirewallAttackMitigation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.putAttackMitigation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

---

##### `ResetAttackMitigation` <a name="ResetAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetAttackMitigation"></a>

```csharp
private void ResetAttackMitigation()
```

##### `ResetDeprecateAnyRequests` <a name="ResetDeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetDeprecateAnyRequests"></a>

```csharp
private void ResetDeprecateAnyRequests()
```

##### `ResetEcsFallback` <a name="ResetEcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetEcsFallback"></a>

```csharp
private void ResetEcsFallback()
```

##### `ResetMaximumCacheTtl` <a name="ResetMaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMaximumCacheTtl"></a>

```csharp
private void ResetMaximumCacheTtl()
```

##### `ResetMinimumCacheTtl` <a name="ResetMinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetMinimumCacheTtl"></a>

```csharp
private void ResetMinimumCacheTtl()
```

##### `ResetNegativeCacheTtl` <a name="ResetNegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetNegativeCacheTtl"></a>

```csharp
private void ResetNegativeCacheTtl()
```

##### `ResetRatelimit` <a name="ResetRatelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRatelimit"></a>

```csharp
private void ResetRatelimit()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.resetRetries"></a>

```csharp
private void ResetRetries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsFirewall.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsFirewall.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsFirewall.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsFirewall.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsFirewall resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsFirewall to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation">AttackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps">DnsFirewallIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput">AttackMitigationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput">DeprecateAnyRequestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput">EcsFallbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput">MaximumCacheTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput">MinimumCacheTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput">NegativeCacheTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput">RatelimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput">UpstreamIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests">DeprecateAnyRequests</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback">EcsFallback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl">MaximumCacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl">MinimumCacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl">NegativeCacheTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit">Ratelimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps">UpstreamIps</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttackMitigation`<sup>Required</sup> <a name="AttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigation"></a>

```csharp
public DnsFirewallAttackMitigationOutputReference AttackMitigation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference">DnsFirewallAttackMitigationOutputReference</a>

---

##### `DnsFirewallIps`<sup>Required</sup> <a name="DnsFirewallIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.dnsFirewallIps"></a>

```csharp
public string[] DnsFirewallIps { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AttackMitigationInput`<sup>Optional</sup> <a name="AttackMitigationInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.attackMitigationInput"></a>

```csharp
public object AttackMitigationInput { get; }
```

- *Type:* object

---

##### `DeprecateAnyRequestsInput`<sup>Optional</sup> <a name="DeprecateAnyRequestsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequestsInput"></a>

```csharp
public object DeprecateAnyRequestsInput { get; }
```

- *Type:* object

---

##### `EcsFallbackInput`<sup>Optional</sup> <a name="EcsFallbackInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallbackInput"></a>

```csharp
public object EcsFallbackInput { get; }
```

- *Type:* object

---

##### `MaximumCacheTtlInput`<sup>Optional</sup> <a name="MaximumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtlInput"></a>

```csharp
public double MaximumCacheTtlInput { get; }
```

- *Type:* double

---

##### `MinimumCacheTtlInput`<sup>Optional</sup> <a name="MinimumCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtlInput"></a>

```csharp
public double MinimumCacheTtlInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegativeCacheTtlInput`<sup>Optional</sup> <a name="NegativeCacheTtlInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtlInput"></a>

```csharp
public double NegativeCacheTtlInput { get; }
```

- *Type:* double

---

##### `RatelimitInput`<sup>Optional</sup> <a name="RatelimitInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimitInput"></a>

```csharp
public double RatelimitInput { get; }
```

- *Type:* double

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `UpstreamIpsInput`<sup>Optional</sup> <a name="UpstreamIpsInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIpsInput"></a>

```csharp
public string[] UpstreamIpsInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DeprecateAnyRequests`<sup>Required</sup> <a name="DeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.deprecateAnyRequests"></a>

```csharp
public object DeprecateAnyRequests { get; }
```

- *Type:* object

---

##### `EcsFallback`<sup>Required</sup> <a name="EcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ecsFallback"></a>

```csharp
public object EcsFallback { get; }
```

- *Type:* object

---

##### `MaximumCacheTtl`<sup>Required</sup> <a name="MaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.maximumCacheTtl"></a>

```csharp
public double MaximumCacheTtl { get; }
```

- *Type:* double

---

##### `MinimumCacheTtl`<sup>Required</sup> <a name="MinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.minimumCacheTtl"></a>

```csharp
public double MinimumCacheTtl { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NegativeCacheTtl`<sup>Required</sup> <a name="NegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.negativeCacheTtl"></a>

```csharp
public double NegativeCacheTtl { get; }
```

- *Type:* double

---

##### `Ratelimit`<sup>Required</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.ratelimit"></a>

```csharp
public double Ratelimit { get; }
```

- *Type:* double

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `UpstreamIps`<sup>Required</sup> <a name="UpstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.upstreamIps"></a>

```csharp
public string[] UpstreamIps { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewall.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsFirewallAttackMitigation <a name="DnsFirewallAttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsFirewallAttackMitigation {
    object Enabled = null,
    object OnlyWhenUpstreamUnhealthy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled">Enabled</a></code> | <code>object</code> | When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy">OnlyWhenUpstreamUnhealthy</a></code> | <code>object</code> | Only mitigate attacks when upstream servers seem unhealthy. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#enabled DnsFirewall#enabled}

---

##### `OnlyWhenUpstreamUnhealthy`<sup>Optional</sup> <a name="OnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation.property.onlyWhenUpstreamUnhealthy"></a>

```csharp
public object OnlyWhenUpstreamUnhealthy { get; set; }
```

- *Type:* object

Only mitigate attacks when upstream servers seem unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#only_when_upstream_unhealthy DnsFirewall#only_when_upstream_unhealthy}

---

### DnsFirewallConfig <a name="DnsFirewallConfig" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsFirewallConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    string[] UpstreamIps,
    DnsFirewallAttackMitigation AttackMitigation = null,
    object DeprecateAnyRequests = null,
    object EcsFallback = null,
    double MaximumCacheTtl = null,
    double MinimumCacheTtl = null,
    double NegativeCacheTtl = null,
    double Ratelimit = null,
    double Retries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name">Name</a></code> | <code>string</code> | DNS Firewall cluster name. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps">UpstreamIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation">AttackMitigation</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a></code> | Attack mitigation settings. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests">DeprecateAnyRequests</a></code> | <code>object</code> | Whether to refuse to answer queries for the ANY type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback">EcsFallback</a></code> | <code>object</code> | Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl">MaximumCacheTtl</a></code> | <code>double</code> | Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl">MinimumCacheTtl</a></code> | <code>double</code> | Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl">NegativeCacheTtl</a></code> | <code>double</code> | Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit">Ratelimit</a></code> | <code>double</code> | Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster). |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries">Retries</a></code> | <code>double</code> | Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#account_id DnsFirewall#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

DNS Firewall cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#name DnsFirewall#name}

---

##### `UpstreamIps`<sup>Required</sup> <a name="UpstreamIps" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.upstreamIps"></a>

```csharp
public string[] UpstreamIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#upstream_ips DnsFirewall#upstream_ips}.

---

##### `AttackMitigation`<sup>Optional</sup> <a name="AttackMitigation" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.attackMitigation"></a>

```csharp
public DnsFirewallAttackMitigation AttackMitigation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigation">DnsFirewallAttackMitigation</a>

Attack mitigation settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#attack_mitigation DnsFirewall#attack_mitigation}

---

##### `DeprecateAnyRequests`<sup>Optional</sup> <a name="DeprecateAnyRequests" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.deprecateAnyRequests"></a>

```csharp
public object DeprecateAnyRequests { get; set; }
```

- *Type:* object

Whether to refuse to answer queries for the ANY type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#deprecate_any_requests DnsFirewall#deprecate_any_requests}

---

##### `EcsFallback`<sup>Optional</sup> <a name="EcsFallback" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ecsFallback"></a>

```csharp
public object EcsFallback { get; set; }
```

- *Type:* object

Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#ecs_fallback DnsFirewall#ecs_fallback}

---

##### `MaximumCacheTtl`<sup>Optional</sup> <a name="MaximumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.maximumCacheTtl"></a>

```csharp
public double MaximumCacheTtl { get; set; }
```

- *Type:* double

Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Higher TTLs will be decreased to the maximum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#maximum_cache_ttl DnsFirewall#maximum_cache_ttl}

---

##### `MinimumCacheTtl`<sup>Optional</sup> <a name="MinimumCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.minimumCacheTtl"></a>

```csharp
public double MinimumCacheTtl { get; set; }
```

- *Type:* double

Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers.

Lower TTLs will be increased to the minimum defined here for caching purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#minimum_cache_ttl DnsFirewall#minimum_cache_ttl}

---

##### `NegativeCacheTtl`<sup>Optional</sup> <a name="NegativeCacheTtl" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.negativeCacheTtl"></a>

```csharp
public double NegativeCacheTtl { get; set; }
```

- *Type:* double

Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#negative_cache_ttl DnsFirewall#negative_cache_ttl}

---

##### `Ratelimit`<sup>Optional</sup> <a name="Ratelimit" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.ratelimit"></a>

```csharp
public double Ratelimit { get; set; }
```

- *Type:* double

Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#ratelimit DnsFirewall#ratelimit}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/dns_firewall#retries DnsFirewall#retries}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsFirewallAttackMitigationOutputReference <a name="DnsFirewallAttackMitigationOutputReference" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsFirewallAttackMitigationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy">ResetOnlyWhenUpstreamUnhealthy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetOnlyWhenUpstreamUnhealthy` <a name="ResetOnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.resetOnlyWhenUpstreamUnhealthy"></a>

```csharp
private void ResetOnlyWhenUpstreamUnhealthy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput">OnlyWhenUpstreamUnhealthyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy">OnlyWhenUpstreamUnhealthy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `OnlyWhenUpstreamUnhealthyInput`<sup>Optional</sup> <a name="OnlyWhenUpstreamUnhealthyInput" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthyInput"></a>

```csharp
public object OnlyWhenUpstreamUnhealthyInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `OnlyWhenUpstreamUnhealthy`<sup>Required</sup> <a name="OnlyWhenUpstreamUnhealthy" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.onlyWhenUpstreamUnhealthy"></a>

```csharp
public object OnlyWhenUpstreamUnhealthy { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsFirewall.DnsFirewallAttackMitigationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



