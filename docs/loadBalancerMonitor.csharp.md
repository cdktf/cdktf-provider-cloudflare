# `loadBalancerMonitor` Submodule <a name="`loadBalancerMonitor` Submodule" id="@cdktf/provider-cloudflare.loadBalancerMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitor <a name="LoadBalancerMonitor" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerMonitor(Construct Scope, string Id, LoadBalancerMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig">LoadBalancerMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig">LoadBalancerMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown">ResetConsecutiveDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp">ResetConsecutiveUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody">ResetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes">ResetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone">ResetProbeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure"></a>

```csharp
private void ResetAllowInsecure()
```

##### `ResetConsecutiveDown` <a name="ResetConsecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown"></a>

```csharp
private void ResetConsecutiveDown()
```

##### `ResetConsecutiveUp` <a name="ResetConsecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp"></a>

```csharp
private void ResetConsecutiveUp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpectedBody` <a name="ResetExpectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody"></a>

```csharp
private void ResetExpectedBody()
```

##### `ResetExpectedCodes` <a name="ResetExpectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes"></a>

```csharp
private void ResetExpectedCodes()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects"></a>

```csharp
private void ResetFollowRedirects()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProbeZone` <a name="ResetProbeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone"></a>

```csharp
private void ResetProbeZone()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LoadBalancerMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput">ConsecutiveDownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput">ConsecutiveUpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput">ExpectedBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput">ExpectedCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput">ProbeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown">ConsecutiveDown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp">ConsecutiveUp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody">ExpectedBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes">ExpectedCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header">Header</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone">ProbeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput"></a>

```csharp
public object AllowInsecureInput { get; }
```

- *Type:* object

---

##### `ConsecutiveDownInput`<sup>Optional</sup> <a name="ConsecutiveDownInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput"></a>

```csharp
public double ConsecutiveDownInput { get; }
```

- *Type:* double

---

##### `ConsecutiveUpInput`<sup>Optional</sup> <a name="ConsecutiveUpInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput"></a>

```csharp
public double ConsecutiveUpInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpectedBodyInput`<sup>Optional</sup> <a name="ExpectedBodyInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput"></a>

```csharp
public string ExpectedBodyInput { get; }
```

- *Type:* string

---

##### `ExpectedCodesInput`<sup>Optional</sup> <a name="ExpectedCodesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput"></a>

```csharp
public string ExpectedCodesInput { get; }
```

- *Type:* string

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput"></a>

```csharp
public object FollowRedirectsInput { get; }
```

- *Type:* object

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProbeZoneInput`<sup>Optional</sup> <a name="ProbeZoneInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput"></a>

```csharp
public string ProbeZoneInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; }
```

- *Type:* object

---

##### `ConsecutiveDown`<sup>Required</sup> <a name="ConsecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown"></a>

```csharp
public double ConsecutiveDown { get; }
```

- *Type:* double

---

##### `ConsecutiveUp`<sup>Required</sup> <a name="ConsecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp"></a>

```csharp
public double ConsecutiveUp { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpectedBody`<sup>Required</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody"></a>

```csharp
public string ExpectedBody { get; }
```

- *Type:* string

---

##### `ExpectedCodes`<sup>Required</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes"></a>

```csharp
public string ExpectedCodes { get; }
```

- *Type:* string

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; }
```

- *Type:* object

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header"></a>

```csharp
public object Header { get; }
```

- *Type:* object

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProbeZone`<sup>Required</sup> <a name="ProbeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone"></a>

```csharp
public string ProbeZone { get; }
```

- *Type:* string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorConfig <a name="LoadBalancerMonitorConfig" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LoadBalancerMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object AllowInsecure = null,
    double ConsecutiveDown = null,
    double ConsecutiveUp = null,
    string Description = null,
    string ExpectedBody = null,
    string ExpectedCodes = null,
    object FollowRedirects = null,
    object Header = null,
    double Interval = null,
    string Method = null,
    string Path = null,
    double Port = null,
    string ProbeZone = null,
    double Retries = null,
    double Timeout = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | Do not validate the certificate when monitor use HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown">ConsecutiveDown</a></code> | <code>double</code> | To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp">ConsecutiveUp</a></code> | <code>double</code> | To be marked healthy the monitored origin must pass this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description">Description</a></code> | <code>string</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody">ExpectedBody</a></code> | <code>string</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes">ExpectedCodes</a></code> | <code>string</code> | The expected HTTP response code or code range of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header">Header</a></code> | <code>object</code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval">Interval</a></code> | <code>double</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method">Method</a></code> | <code>string</code> | The method to use for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path">Path</a></code> | <code>string</code> | The endpoint path you want to conduct a health check against. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port">Port</a></code> | <code>double</code> | The port number to connect to for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone">ProbeZone</a></code> | <code>string</code> | Assign this monitor to emulate the specified zone while probing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries">Retries</a></code> | <code>double</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout">Timeout</a></code> | <code>double</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type">Type</a></code> | <code>string</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; set; }
```

- *Type:* object

Do not validate the certificate when monitor use HTTPS.

This parameter is currently only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}

---

##### `ConsecutiveDown`<sup>Optional</sup> <a name="ConsecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown"></a>

```csharp
public double ConsecutiveDown { get; set; }
```

- *Type:* double

To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}

---

##### `ConsecutiveUp`<sup>Optional</sup> <a name="ConsecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp"></a>

```csharp
public double ConsecutiveUp { get; set; }
```

- *Type:* double

To be marked healthy the monitored origin must pass this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}

---

##### `ExpectedBody`<sup>Optional</sup> <a name="ExpectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody"></a>

```csharp
public string ExpectedBody { get; set; }
```

- *Type:* string

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}

---

##### `ExpectedCodes`<sup>Optional</sup> <a name="ExpectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes"></a>

```csharp
public string ExpectedCodes { get; set; }
```

- *Type:* string

The expected HTTP response code or code range of the health check.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; set; }
```

- *Type:* object

Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

The interval between each health check.

Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The method to use for the health check.

This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The endpoint path you want to conduct a health check against.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number to connect to for the health check.

Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}

---

##### `ProbeZone`<sup>Optional</sup> <a name="ProbeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone"></a>

```csharp
public string ProbeZone { get; set; }
```

- *Type:* string

Assign this monitor to emulate the specified zone while probing.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}

---



