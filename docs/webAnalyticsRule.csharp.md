# `webAnalyticsRule` Submodule <a name="`webAnalyticsRule` Submodule" id="@cdktf/provider-cloudflare.webAnalyticsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsRule <a name="WebAnalyticsRule" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule cloudflare_web_analytics_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WebAnalyticsRule(Construct Scope, string Id, WebAnalyticsRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig">WebAnalyticsRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig">WebAnalyticsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetInclusive">ResetInclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetIsPaused">ResetIsPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetInclusive` <a name="ResetInclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetInclusive"></a>

```csharp
private void ResetInclusive()
```

##### `ResetIsPaused` <a name="ResetIsPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetIsPaused"></a>

```csharp
private void ResetIsPaused()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.resetPaths"></a>

```csharp
private void ResetPaths()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WebAnalyticsRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WebAnalyticsRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WebAnalyticsRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WebAnalyticsRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WebAnalyticsRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebAnalyticsRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebAnalyticsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WebAnalyticsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput">InclusiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput">IsPausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput">RulesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive">Inclusive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused">IsPaused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId">RulesetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `InclusiveInput`<sup>Optional</sup> <a name="InclusiveInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusiveInput"></a>

```csharp
public object InclusiveInput { get; }
```

- *Type:* object

---

##### `IsPausedInput`<sup>Optional</sup> <a name="IsPausedInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPausedInput"></a>

```csharp
public object IsPausedInput { get; }
```

- *Type:* object

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `RulesetIdInput`<sup>Optional</sup> <a name="RulesetIdInput" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetIdInput"></a>

```csharp
public string RulesetIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.inclusive"></a>

```csharp
public object Inclusive { get; }
```

- *Type:* object

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.isPaused"></a>

```csharp
public object IsPaused { get; }
```

- *Type:* object

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.rulesetId"></a>

```csharp
public string RulesetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebAnalyticsRuleConfig <a name="WebAnalyticsRuleConfig" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WebAnalyticsRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string RulesetId,
    string Host = null,
    object Inclusive = null,
    object IsPaused = null,
    string[] Paths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId">RulesetId</a></code> | <code>string</code> | The Web Analytics ruleset identifier. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive">Inclusive</a></code> | <code>object</code> | Whether the rule includes or excludes traffic from being measured. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused">IsPaused</a></code> | <code>object</code> | Whether the rule is paused or not. |
| <code><a href="#@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths">Paths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#account_id WebAnalyticsRule#account_id}

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.rulesetId"></a>

```csharp
public string RulesetId { get; set; }
```

- *Type:* string

The Web Analytics ruleset identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#ruleset_id WebAnalyticsRule#ruleset_id}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#host WebAnalyticsRule#host}.

---

##### `Inclusive`<sup>Optional</sup> <a name="Inclusive" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.inclusive"></a>

```csharp
public object Inclusive { get; set; }
```

- *Type:* object

Whether the rule includes or excludes traffic from being measured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#inclusive WebAnalyticsRule#inclusive}

---

##### `IsPaused`<sup>Optional</sup> <a name="IsPaused" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.isPaused"></a>

```csharp
public object IsPaused { get; set; }
```

- *Type:* object

Whether the rule is paused or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#is_paused WebAnalyticsRule#is_paused}

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-cloudflare.webAnalyticsRule.WebAnalyticsRuleConfig.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/web_analytics_rule#paths WebAnalyticsRule#paths}.

---



