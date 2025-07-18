# `spectrumApplication` Submodule <a name="`spectrumApplication` Submodule" id="@cdktf/provider-cloudflare.spectrumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpectrumApplication <a name="SpectrumApplication" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application cloudflare_spectrum_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplication(Construct Scope, string Id, SpectrumApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig">SpectrumApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig">SpectrumApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps">PutEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns">PutOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting">ResetArgoSmartRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps">ResetEdgeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall">ResetIpFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect">ResetOriginDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns">ResetOriginDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort">ResetOriginPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol">ResetProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType">ResetTrafficType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns"></a>

```csharp
private void PutDns(SpectrumApplicationDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

---

##### `PutEdgeIps` <a name="PutEdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps"></a>

```csharp
private void PutEdgeIps(SpectrumApplicationEdgeIps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putEdgeIps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

---

##### `PutOriginDns` <a name="PutOriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns"></a>

```csharp
private void PutOriginDns(SpectrumApplicationOriginDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.putOriginDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

---

##### `ResetArgoSmartRouting` <a name="ResetArgoSmartRouting" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetArgoSmartRouting"></a>

```csharp
private void ResetArgoSmartRouting()
```

##### `ResetEdgeIps` <a name="ResetEdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetEdgeIps"></a>

```csharp
private void ResetEdgeIps()
```

##### `ResetIpFirewall` <a name="ResetIpFirewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetIpFirewall"></a>

```csharp
private void ResetIpFirewall()
```

##### `ResetOriginDirect` <a name="ResetOriginDirect" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDirect"></a>

```csharp
private void ResetOriginDirect()
```

##### `ResetOriginDns` <a name="ResetOriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginDns"></a>

```csharp
private void ResetOriginDns()
```

##### `ResetOriginPort` <a name="ResetOriginPort" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetOriginPort"></a>

```csharp
private void ResetOriginPort()
```

##### `ResetProxyProtocol` <a name="ResetProxyProtocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetProxyProtocol"></a>

```csharp
private void ResetProxyProtocol()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.resetTrafficType"></a>

```csharp
private void ResetTrafficType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

SpectrumApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

SpectrumApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

SpectrumApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

SpectrumApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpectrumApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpectrumApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpectrumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpectrumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps">EdgeIps</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns">OriginDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput">ArgoSmartRoutingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput">DnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput">EdgeIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput">IpFirewallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput">OriginDirectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput">OriginDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput">OriginPortInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput">ProxyProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput">TlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting">ArgoSmartRouting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall">IpFirewall</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect">OriginDirect</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort">OriginPort</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol">ProxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls">Tls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType">TrafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dns"></a>

```csharp
public SpectrumApplicationDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference">SpectrumApplicationDnsOutputReference</a>

---

##### `EdgeIps`<sup>Required</sup> <a name="EdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIps"></a>

```csharp
public SpectrumApplicationEdgeIpsOutputReference EdgeIps { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference">SpectrumApplicationEdgeIpsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `OriginDns`<sup>Required</sup> <a name="OriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDns"></a>

```csharp
public SpectrumApplicationOriginDnsOutputReference OriginDns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference">SpectrumApplicationOriginDnsOutputReference</a>

---

##### `ArgoSmartRoutingInput`<sup>Optional</sup> <a name="ArgoSmartRoutingInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRoutingInput"></a>

```csharp
public object ArgoSmartRoutingInput { get; }
```

- *Type:* object

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.dnsInput"></a>

```csharp
public object DnsInput { get; }
```

- *Type:* object

---

##### `EdgeIpsInput`<sup>Optional</sup> <a name="EdgeIpsInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.edgeIpsInput"></a>

```csharp
public object EdgeIpsInput { get; }
```

- *Type:* object

---

##### `IpFirewallInput`<sup>Optional</sup> <a name="IpFirewallInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewallInput"></a>

```csharp
public object IpFirewallInput { get; }
```

- *Type:* object

---

##### `OriginDirectInput`<sup>Optional</sup> <a name="OriginDirectInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirectInput"></a>

```csharp
public string[] OriginDirectInput { get; }
```

- *Type:* string[]

---

##### `OriginDnsInput`<sup>Optional</sup> <a name="OriginDnsInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDnsInput"></a>

```csharp
public object OriginDnsInput { get; }
```

- *Type:* object

---

##### `OriginPortInput`<sup>Optional</sup> <a name="OriginPortInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPortInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> OriginPortInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProxyProtocolInput`<sup>Optional</sup> <a name="ProxyProtocolInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocolInput"></a>

```csharp
public string ProxyProtocolInput { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tlsInput"></a>

```csharp
public string TlsInput { get; }
```

- *Type:* string

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficTypeInput"></a>

```csharp
public string TrafficTypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ArgoSmartRouting`<sup>Required</sup> <a name="ArgoSmartRouting" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.argoSmartRouting"></a>

```csharp
public object ArgoSmartRouting { get; }
```

- *Type:* object

---

##### `IpFirewall`<sup>Required</sup> <a name="IpFirewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.ipFirewall"></a>

```csharp
public object IpFirewall { get; }
```

- *Type:* object

---

##### `OriginDirect`<sup>Required</sup> <a name="OriginDirect" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originDirect"></a>

```csharp
public string[] OriginDirect { get; }
```

- *Type:* string[]

---

##### `OriginPort`<sup>Required</sup> <a name="OriginPort" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.originPort"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> OriginPort { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProxyProtocol`<sup>Required</sup> <a name="ProxyProtocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.proxyProtocol"></a>

```csharp
public string ProxyProtocol { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tls"></a>

```csharp
public string Tls { get; }
```

- *Type:* string

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.trafficType"></a>

```csharp
public string TrafficType { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpectrumApplicationConfig <a name="SpectrumApplicationConfig" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SpectrumApplicationDns Dns,
    string Protocol,
    string ZoneId,
    object ArgoSmartRouting = null,
    SpectrumApplicationEdgeIps EdgeIps = null,
    object IpFirewall = null,
    string[] OriginDirect = null,
    SpectrumApplicationOriginDns OriginDns = null,
    System.Collections.Generic.IDictionary<string, object> OriginPort = null,
    string ProxyProtocol = null,
    string Tls = null,
    string TrafficType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol">Protocol</a></code> | <code>string</code> | The port configuration at Cloudflare's edge. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Zone identifier. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting">ArgoSmartRouting</a></code> | <code>object</code> | Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct". |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps">EdgeIps</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a></code> | The anycast edge IP configuration for the hostname of this application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall">IpFirewall</a></code> | <code>object</code> | Enables IP Access Rules for this application. Notes: Only available for TCP applications. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect">OriginDirect</a></code> | <code>string[]</code> | List of origin IP addresses. Array may contain multiple IP addresses for load balancing. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns">OriginDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a></code> | The name and type of DNS record for the Spectrum application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort">OriginPort</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | The destination port at the origin. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol">ProxyProtocol</a></code> | <code>string</code> | Enables Proxy Protocol to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls">Tls</a></code> | <code>string</code> | The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict". |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType">TrafficType</a></code> | <code>string</code> | Determines how data travels from the edge to your origin. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.dns"></a>

```csharp
public SpectrumApplicationDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns">SpectrumApplicationDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#dns SpectrumApplication#dns}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The port configuration at Cloudflare's edge.

May specify a single port, for example `"tcp/1000"`, or a range of ports, for example `"tcp/1000-2000"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#protocol SpectrumApplication#protocol}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#zone_id SpectrumApplication#zone_id}

---

##### `ArgoSmartRouting`<sup>Optional</sup> <a name="ArgoSmartRouting" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.argoSmartRouting"></a>

```csharp
public object ArgoSmartRouting { get; set; }
```

- *Type:* object

Enables Argo Smart Routing for this application. Notes: Only available for TCP applications with traffic_type set to "direct".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#argo_smart_routing SpectrumApplication#argo_smart_routing}

---

##### `EdgeIps`<sup>Optional</sup> <a name="EdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.edgeIps"></a>

```csharp
public SpectrumApplicationEdgeIps EdgeIps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps">SpectrumApplicationEdgeIps</a>

The anycast edge IP configuration for the hostname of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#edge_ips SpectrumApplication#edge_ips}

---

##### `IpFirewall`<sup>Optional</sup> <a name="IpFirewall" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.ipFirewall"></a>

```csharp
public object IpFirewall { get; set; }
```

- *Type:* object

Enables IP Access Rules for this application. Notes: Only available for TCP applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#ip_firewall SpectrumApplication#ip_firewall}

---

##### `OriginDirect`<sup>Optional</sup> <a name="OriginDirect" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDirect"></a>

```csharp
public string[] OriginDirect { get; set; }
```

- *Type:* string[]

List of origin IP addresses. Array may contain multiple IP addresses for load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#origin_direct SpectrumApplication#origin_direct}

---

##### `OriginDns`<sup>Optional</sup> <a name="OriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originDns"></a>

```csharp
public SpectrumApplicationOriginDns OriginDns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns">SpectrumApplicationOriginDns</a>

The name and type of DNS record for the Spectrum application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#origin_dns SpectrumApplication#origin_dns}

---

##### `OriginPort`<sup>Optional</sup> <a name="OriginPort" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.originPort"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> OriginPort { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

The destination port at the origin.

Only specified in conjunction with origin_dns. May use an integer to specify a single origin port, for example `1000`, or a string to specify a range of origin ports, for example `"1000-2000"`.
Notes: If specifying a port range, the number of ports in the range must match the number of ports specified in the "protocol" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#origin_port SpectrumApplication#origin_port}

---

##### `ProxyProtocol`<sup>Optional</sup> <a name="ProxyProtocol" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.proxyProtocol"></a>

```csharp
public string ProxyProtocol { get; set; }
```

- *Type:* string

Enables Proxy Protocol to the origin.

Refer to [Enable Proxy protocol](https://developers.cloudflare.com/spectrum/getting-started/proxy-protocol/) for implementation details on PROXY Protocol V1, PROXY Protocol V2, and Simple Proxy Protocol.
Available values: "off", "v1", "v2", "simple".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#proxy_protocol SpectrumApplication#proxy_protocol}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.tls"></a>

```csharp
public string Tls { get; set; }
```

- *Type:* string

The type of TLS termination associated with the application. Available values: "off", "flexible", "full", "strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#tls SpectrumApplication#tls}

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationConfig.property.trafficType"></a>

```csharp
public string TrafficType { get; set; }
```

- *Type:* string

Determines how data travels from the edge to your origin.

When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
Available values: "direct", "http", "https".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#traffic_type SpectrumApplication#traffic_type}

---

### SpectrumApplicationDns <a name="SpectrumApplicationDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationDns {
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name">Name</a></code> | <code>string</code> | The name of the DNS record associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type">Type</a></code> | <code>string</code> | The type of DNS record associated with the application. Available values: "CNAME", "ADDRESS". |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the DNS record associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of DNS record associated with the application. Available values: "CNAME", "ADDRESS".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

### SpectrumApplicationEdgeIps <a name="SpectrumApplicationEdgeIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationEdgeIps {
    string Connectivity = null,
    string[] Ips = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity">Connectivity</a></code> | <code>string</code> | The IP versions supported for inbound connections on Spectrum anycast IPs. Available values: "all", "ipv4", "ipv6". |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips">Ips</a></code> | <code>string[]</code> | The array of customer owned IPs we broadcast via anycast for this hostname and application. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type">Type</a></code> | <code>string</code> | The type of edge IP configuration specified. |

---

##### `Connectivity`<sup>Optional</sup> <a name="Connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.connectivity"></a>

```csharp
public string Connectivity { get; set; }
```

- *Type:* string

The IP versions supported for inbound connections on Spectrum anycast IPs. Available values: "all", "ipv4", "ipv6".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#connectivity SpectrumApplication#connectivity}

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.ips"></a>

```csharp
public string[] Ips { get; set; }
```

- *Type:* string[]

The array of customer owned IPs we broadcast via anycast for this hostname and application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#ips SpectrumApplication#ips}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIps.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of edge IP configuration specified.

Dynamically allocated edge IPs use Spectrum anycast IPs in accordance with the connectivity you specify. Only valid with CNAME DNS names.
Available values: "dynamic", "static".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

### SpectrumApplicationOriginDns <a name="SpectrumApplicationOriginDns" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationOriginDns {
    string Name = null,
    double Ttl = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name">Name</a></code> | <code>string</code> | The name of the DNS record associated with the origin. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.ttl">Ttl</a></code> | <code>double</code> | The TTL of our resolution of your DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.type">Type</a></code> | <code>string</code> | The type of DNS record associated with the origin. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the DNS record associated with the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#name SpectrumApplication#name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The TTL of our resolution of your DNS record in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#ttl SpectrumApplication#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of DNS record associated with the origin.

"" is used to specify a combination of A/AAAA records.
Available values: "", "A", "AAAA", "SRV".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/spectrum_application#type SpectrumApplication#type}

---

## Classes <a name="Classes" id="Classes"></a>

### SpectrumApplicationDnsOutputReference <a name="SpectrumApplicationDnsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationDnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpectrumApplicationEdgeIpsOutputReference <a name="SpectrumApplicationEdgeIpsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationEdgeIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity">ResetConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivity` <a name="ResetConnectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetConnectivity"></a>

```csharp
private void ResetConnectivity()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetIps"></a>

```csharp
private void ResetIps()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput">ConnectivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput">IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity">Connectivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips">Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityInput`<sup>Optional</sup> <a name="ConnectivityInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivityInput"></a>

```csharp
public string ConnectivityInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ipsInput"></a>

```csharp
public string[] IpsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Connectivity`<sup>Required</sup> <a name="Connectivity" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.connectivity"></a>

```csharp
public string Connectivity { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.ips"></a>

```csharp
public string[] Ips { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationEdgeIpsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpectrumApplicationOriginDnsOutputReference <a name="SpectrumApplicationOriginDnsOutputReference" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new SpectrumApplicationOriginDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.spectrumApplication.SpectrumApplicationOriginDnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



