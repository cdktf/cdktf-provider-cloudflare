# `dnsZoneTransfersPeer` Submodule <a name="`dnsZoneTransfersPeer` Submodule" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersPeer <a name="DnsZoneTransfersPeer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer cloudflare_dns_zone_transfers_peer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsZoneTransfersPeer(Construct Scope, string Id, DnsZoneTransfersPeerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig">DnsZoneTransfersPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable">ResetIxfrEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId">ResetTsigId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIxfrEnable` <a name="ResetIxfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetIxfrEnable"></a>

```csharp
private void ResetIxfrEnable()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetTsigId` <a name="ResetTsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.resetTsigId"></a>

```csharp
private void ResetTsigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsZoneTransfersPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsZoneTransfersPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsZoneTransfersPeer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsZoneTransfersPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsZoneTransfersPeer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZoneTransfersPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZoneTransfersPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput">IxfrEnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput">TsigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable">IxfrEnable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId">TsigId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `IxfrEnableInput`<sup>Optional</sup> <a name="IxfrEnableInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnableInput"></a>

```csharp
public object IxfrEnableInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TsigIdInput`<sup>Optional</sup> <a name="TsigIdInput" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigIdInput"></a>

```csharp
public string TsigIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `IxfrEnable`<sup>Required</sup> <a name="IxfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.ixfrEnable"></a>

```csharp
public object IxfrEnable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `TsigId`<sup>Required</sup> <a name="TsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tsigId"></a>

```csharp
public string TsigId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersPeerConfig <a name="DnsZoneTransfersPeerConfig" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsZoneTransfersPeerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    string Ip = null,
    object IxfrEnable = null,
    double Port = null,
    string TsigId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name">Name</a></code> | <code>string</code> | The name of the peer. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip">Ip</a></code> | <code>string</code> | IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable">IxfrEnable</a></code> | <code>object</code> | Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port">Port</a></code> | <code>double</code> | DNS port of primary or secondary nameserver, depending on what zone this peer is linked to. |
| <code><a href="#@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId">TsigId</a></code> | <code>string</code> | TSIG authentication will be used for zone transfer if configured. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#account_id DnsZoneTransfersPeer#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#name DnsZoneTransfersPeer#name}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IPv4/IPv6 address of primary or secondary nameserver, depending on what zone this peer is linked to.

For primary zones this IP defines the IP of the secondary nameserver Cloudflare will NOTIFY upon zone changes. For secondary zones this IP defines the IP of the primary nameserver Cloudflare will send AXFR/IXFR requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#ip DnsZoneTransfersPeer#ip}

---

##### `IxfrEnable`<sup>Optional</sup> <a name="IxfrEnable" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.ixfrEnable"></a>

```csharp
public object IxfrEnable { get; set; }
```

- *Type:* object

Enable IXFR transfer protocol, default is AXFR. Only applicable to secondary zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#ixfr_enable DnsZoneTransfersPeer#ixfr_enable}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

DNS port of primary or secondary nameserver, depending on what zone this peer is linked to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#port DnsZoneTransfersPeer#port}

---

##### `TsigId`<sup>Optional</sup> <a name="TsigId" id="@cdktf/provider-cloudflare.dnsZoneTransfersPeer.DnsZoneTransfersPeerConfig.property.tsigId"></a>

```csharp
public string TsigId { get; set; }
```

- *Type:* string

TSIG authentication will be used for zone transfer if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/dns_zone_transfers_peer#tsig_id DnsZoneTransfersPeer#tsig_id}

---



