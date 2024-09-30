# `zeroTrustAccessPolicy` Submodule <a name="`zeroTrustAccessPolicy` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessPolicy <a name="ZeroTrustAccessPolicy" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy cloudflare_zero_trust_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicy(Construct Scope, string Id, ZeroTrustAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig">ZeroTrustAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig">ZeroTrustAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup">PutApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putConnectionRules">PutConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire">PutRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalGroup">ResetApprovalGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalRequired">ResetApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetConnectionRules">ResetConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetIsolationRequired">ResetIsolationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPrecedence">ResetPrecedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationPrompt">ResetPurposeJustificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationRequired">ResetPurposeJustificationRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetRequire">ResetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalGroup` <a name="PutApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup"></a>

```csharp
private void PutApprovalGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putApprovalGroup.parameter.value"></a>

- *Type:* object

---

##### `PutConnectionRules` <a name="PutConnectionRules" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putConnectionRules"></a>

```csharp
private void PutConnectionRules(ZeroTrustAccessPolicyConnectionRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putConnectionRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a>

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude"></a>

```csharp
private void PutExclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putExclude.parameter.value"></a>

- *Type:* object

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude"></a>

```csharp
private void PutInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putInclude.parameter.value"></a>

- *Type:* object

---

##### `PutRequire` <a name="PutRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire"></a>

```csharp
private void PutRequire(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.putRequire.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetApprovalGroup` <a name="ResetApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalGroup"></a>

```csharp
private void ResetApprovalGroup()
```

##### `ResetApprovalRequired` <a name="ResetApprovalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetApprovalRequired"></a>

```csharp
private void ResetApprovalRequired()
```

##### `ResetConnectionRules` <a name="ResetConnectionRules" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetConnectionRules"></a>

```csharp
private void ResetConnectionRules()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsolationRequired` <a name="ResetIsolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetIsolationRequired"></a>

```csharp
private void ResetIsolationRequired()
```

##### `ResetPrecedence` <a name="ResetPrecedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPrecedence"></a>

```csharp
private void ResetPrecedence()
```

##### `ResetPurposeJustificationPrompt` <a name="ResetPurposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationPrompt"></a>

```csharp
private void ResetPurposeJustificationPrompt()
```

##### `ResetPurposeJustificationRequired` <a name="ResetPurposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetPurposeJustificationRequired"></a>

```csharp
private void ResetPurposeJustificationRequired()
```

##### `ResetRequire` <a name="ResetRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetRequire"></a>

```csharp
private void ResetRequire()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroup">ApprovalGroup</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList">ZeroTrustAccessPolicyApprovalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connectionRules">ConnectionRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference">ZeroTrustAccessPolicyConnectionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList">ZeroTrustAccessPolicyExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList">ZeroTrustAccessPolicyIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.require">Require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList">ZeroTrustAccessPolicyRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroupInput">ApprovalGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequiredInput">ApprovalRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connectionRulesInput">ConnectionRulesInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decisionInput">DecisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.excludeInput">ExcludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.includeInput">IncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequiredInput">IsolationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPromptInput">PurposeJustificationPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequiredInput">PurposeJustificationRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.requireInput">RequireInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decision">Decision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequired">IsolationRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPrompt">PurposeJustificationPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequired">PurposeJustificationRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalGroup`<sup>Required</sup> <a name="ApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroup"></a>

```csharp
public ZeroTrustAccessPolicyApprovalGroupList ApprovalGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList">ZeroTrustAccessPolicyApprovalGroupList</a>

---

##### `ConnectionRules`<sup>Required</sup> <a name="ConnectionRules" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connectionRules"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRulesOutputReference ConnectionRules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference">ZeroTrustAccessPolicyConnectionRulesOutputReference</a>

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.exclude"></a>

```csharp
public ZeroTrustAccessPolicyExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList">ZeroTrustAccessPolicyExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.include"></a>

```csharp
public ZeroTrustAccessPolicyIncludeList Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList">ZeroTrustAccessPolicyIncludeList</a>

---

##### `Require`<sup>Required</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.require"></a>

```csharp
public ZeroTrustAccessPolicyRequireList Require { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList">ZeroTrustAccessPolicyRequireList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ApprovalGroupInput`<sup>Optional</sup> <a name="ApprovalGroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalGroupInput"></a>

```csharp
public object ApprovalGroupInput { get; }
```

- *Type:* object

---

##### `ApprovalRequiredInput`<sup>Optional</sup> <a name="ApprovalRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequiredInput"></a>

```csharp
public object ApprovalRequiredInput { get; }
```

- *Type:* object

---

##### `ConnectionRulesInput`<sup>Optional</sup> <a name="ConnectionRulesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.connectionRulesInput"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRules ConnectionRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a>

---

##### `DecisionInput`<sup>Optional</sup> <a name="DecisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decisionInput"></a>

```csharp
public string DecisionInput { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.excludeInput"></a>

```csharp
public object ExcludeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.includeInput"></a>

```csharp
public object IncludeInput { get; }
```

- *Type:* object

---

##### `IsolationRequiredInput`<sup>Optional</sup> <a name="IsolationRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequiredInput"></a>

```csharp
public object IsolationRequiredInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `PurposeJustificationPromptInput`<sup>Optional</sup> <a name="PurposeJustificationPromptInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPromptInput"></a>

```csharp
public string PurposeJustificationPromptInput { get; }
```

- *Type:* string

---

##### `PurposeJustificationRequiredInput`<sup>Optional</sup> <a name="PurposeJustificationRequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequiredInput"></a>

```csharp
public object PurposeJustificationRequiredInput { get; }
```

- *Type:* object

---

##### `RequireInput`<sup>Optional</sup> <a name="RequireInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.requireInput"></a>

```csharp
public object RequireInput { get; }
```

- *Type:* object

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ApprovalRequired`<sup>Required</sup> <a name="ApprovalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; }
```

- *Type:* object

---

##### `Decision`<sup>Required</sup> <a name="Decision" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.decision"></a>

```csharp
public string Decision { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsolationRequired`<sup>Required</sup> <a name="IsolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.isolationRequired"></a>

```csharp
public object IsolationRequired { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `PurposeJustificationPrompt`<sup>Required</sup> <a name="PurposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationPrompt"></a>

```csharp
public string PurposeJustificationPrompt { get; }
```

- *Type:* string

---

##### `PurposeJustificationRequired`<sup>Required</sup> <a name="PurposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.purposeJustificationRequired"></a>

```csharp
public object PurposeJustificationRequired { get; }
```

- *Type:* object

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessPolicyApprovalGroup <a name="ZeroTrustAccessPolicyApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyApprovalGroup {
    double ApprovalsNeeded,
    string[] EmailAddresses = null,
    string EmailListUuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | Number of approvals needed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | List of emails to request approval from. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailListUuid">EmailListUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}. |

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; set; }
```

- *Type:* double

Number of approvals needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#approvals_needed ZeroTrustAccessPolicy#approvals_needed}

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

List of emails to request approval from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_addresses ZeroTrustAccessPolicy#email_addresses}

---

##### `EmailListUuid`<sup>Optional</sup> <a name="EmailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroup.property.emailListUuid"></a>

```csharp
public string EmailListUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_list_uuid ZeroTrustAccessPolicy#email_list_uuid}.

---

### ZeroTrustAccessPolicyConfig <a name="ZeroTrustAccessPolicyConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Decision,
    object Include,
    string Name,
    string AccountId = null,
    string ApplicationId = null,
    object ApprovalGroup = null,
    object ApprovalRequired = null,
    ZeroTrustAccessPolicyConnectionRules ConnectionRules = null,
    object Exclude = null,
    string Id = null,
    object IsolationRequired = null,
    double Precedence = null,
    string PurposeJustificationPrompt = null,
    object PurposeJustificationRequired = null,
    object Require = null,
    string SessionDuration = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.decision">Decision</a></code> | <code>string</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.include">Include</a></code> | <code>object</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.name">Name</a></code> | <code>string</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalGroup">ApprovalGroup</a></code> | <code>object</code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalRequired">ApprovalRequired</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connectionRules">ConnectionRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a></code> | connection_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.exclude">Exclude</a></code> | <code>object</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.isolationRequired">IsolationRequired</a></code> | <code>object</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.precedence">Precedence</a></code> | <code>double</code> | The unique precedence for policies on a single application. Required when using `application_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationPrompt">PurposeJustificationPrompt</a></code> | <code>string</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationRequired">PurposeJustificationRequired</a></code> | <code>object</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.require">Require</a></code> | <code>object</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Decision`<sup>Required</sup> <a name="Decision" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.decision"></a>

```csharp
public string Decision { get; set; }
```

- *Type:* string

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#decision ZeroTrustAccessPolicy#decision}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.include"></a>

```csharp
public object Include { get; set; }
```

- *Type:* object

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#include ZeroTrustAccessPolicy#include}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#account_id ZeroTrustAccessPolicy#account_id}

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The ID of the application the policy is associated with.

Required when using `precedence`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#application_id ZeroTrustAccessPolicy#application_id}

---

##### `ApprovalGroup`<sup>Optional</sup> <a name="ApprovalGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalGroup"></a>

```csharp
public object ApprovalGroup { get; set; }
```

- *Type:* object

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#approval_group ZeroTrustAccessPolicy#approval_group}

---

##### `ApprovalRequired`<sup>Optional</sup> <a name="ApprovalRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.approvalRequired"></a>

```csharp
public object ApprovalRequired { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#approval_required ZeroTrustAccessPolicy#approval_required}.

---

##### `ConnectionRules`<sup>Optional</sup> <a name="ConnectionRules" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.connectionRules"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRules ConnectionRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a>

connection_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#connection_rules ZeroTrustAccessPolicy#connection_rules}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.exclude"></a>

```csharp
public object Exclude { get; set; }
```

- *Type:* object

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#exclude ZeroTrustAccessPolicy#exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsolationRequired`<sup>Optional</sup> <a name="IsolationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.isolationRequired"></a>

```csharp
public object IsolationRequired { get; set; }
```

- *Type:* object

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#isolation_required ZeroTrustAccessPolicy#isolation_required}

---

##### `Precedence`<sup>Optional</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

The unique precedence for policies on a single application. Required when using `application_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#precedence ZeroTrustAccessPolicy#precedence}

---

##### `PurposeJustificationPrompt`<sup>Optional</sup> <a name="PurposeJustificationPrompt" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationPrompt"></a>

```csharp
public string PurposeJustificationPrompt { get; set; }
```

- *Type:* string

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#purpose_justification_prompt ZeroTrustAccessPolicy#purpose_justification_prompt}

---

##### `PurposeJustificationRequired`<sup>Optional</sup> <a name="PurposeJustificationRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.purposeJustificationRequired"></a>

```csharp
public object PurposeJustificationRequired { get; set; }
```

- *Type:* object

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#purpose_justification_required ZeroTrustAccessPolicy#purpose_justification_required}

---

##### `Require`<sup>Optional</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.require"></a>

```csharp
public object Require { get; set; }
```

- *Type:* object

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#require ZeroTrustAccessPolicy#require}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#session_duration ZeroTrustAccessPolicy#session_duration}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#zone_id ZeroTrustAccessPolicy#zone_id}

---

### ZeroTrustAccessPolicyConnectionRules <a name="ZeroTrustAccessPolicyConnectionRules" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyConnectionRules {
    ZeroTrustAccessPolicyConnectionRulesSsh Ssh
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a></code> | ssh block. |

---

##### `Ssh`<sup>Required</sup> <a name="Ssh" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules.property.ssh"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRulesSsh Ssh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ssh ZeroTrustAccessPolicy#ssh}

---

### ZeroTrustAccessPolicyConnectionRulesSsh <a name="ZeroTrustAccessPolicyConnectionRulesSsh" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyConnectionRulesSsh {
    string[] Usernames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh.property.usernames">Usernames</a></code> | <code>string[]</code> | Contains the Unix usernames that may be used when connecting over SSH. |

---

##### `Usernames`<sup>Required</sup> <a name="Usernames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh.property.usernames"></a>

```csharp
public string[] Usernames { get; set; }
```

- *Type:* string[]

Contains the Unix usernames that may be used when connecting over SSH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#usernames ZeroTrustAccessPolicy#usernames}

---

### ZeroTrustAccessPolicyExclude <a name="ZeroTrustAccessPolicyExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExclude {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyExcludeAuthContext <a name="ZeroTrustAccessPolicyExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeAzure <a name="ZeroTrustAccessPolicyExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeExternalEvaluation <a name="ZeroTrustAccessPolicyExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyExcludeGithub <a name="ZeroTrustAccessPolicyExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyExcludeGsuite <a name="ZeroTrustAccessPolicyExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyExcludeOkta <a name="ZeroTrustAccessPolicyExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyExcludeSaml <a name="ZeroTrustAccessPolicyExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyInclude <a name="ZeroTrustAccessPolicyInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyInclude {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyInclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyIncludeAuthContext <a name="ZeroTrustAccessPolicyIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeAzure <a name="ZeroTrustAccessPolicyIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeExternalEvaluation <a name="ZeroTrustAccessPolicyIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyIncludeGithub <a name="ZeroTrustAccessPolicyIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyIncludeGsuite <a name="ZeroTrustAccessPolicyIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyIncludeOkta <a name="ZeroTrustAccessPolicyIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyIncludeSaml <a name="ZeroTrustAccessPolicyIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequire <a name="ZeroTrustAccessPolicyRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequire {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#any_valid_service_token ZeroTrustAccessPolicy#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_context ZeroTrustAccessPolicy#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#auth_method ZeroTrustAccessPolicy#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#azure ZeroTrustAccessPolicy#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#certificate ZeroTrustAccessPolicy#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_name ZeroTrustAccessPolicy#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#common_names ZeroTrustAccessPolicy#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#device_posture ZeroTrustAccessPolicy#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_domain ZeroTrustAccessPolicy#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email_list ZeroTrustAccessPolicy#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#everyone ZeroTrustAccessPolicy#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#external_evaluation ZeroTrustAccessPolicy#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#geo ZeroTrustAccessPolicy#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#github ZeroTrustAccessPolicy#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#group ZeroTrustAccessPolicy#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#gsuite ZeroTrustAccessPolicy#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip ZeroTrustAccessPolicy#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ip_list ZeroTrustAccessPolicy#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#login_method ZeroTrustAccessPolicy#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#okta ZeroTrustAccessPolicy#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#saml ZeroTrustAccessPolicy#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequire.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#service_token ZeroTrustAccessPolicy#service_token}

---

### ZeroTrustAccessPolicyRequireAuthContext <a name="ZeroTrustAccessPolicyRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#ac_id ZeroTrustAccessPolicy#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireAzure <a name="ZeroTrustAccessPolicyRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#id ZeroTrustAccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireExternalEvaluation <a name="ZeroTrustAccessPolicyRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#evaluate_url ZeroTrustAccessPolicy#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#keys_url ZeroTrustAccessPolicy#keys_url}

---

### ZeroTrustAccessPolicyRequireGithub <a name="ZeroTrustAccessPolicyRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#teams ZeroTrustAccessPolicy#teams}

---

### ZeroTrustAccessPolicyRequireGsuite <a name="ZeroTrustAccessPolicyRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGsuite {
    string[] Email = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#email ZeroTrustAccessPolicy#email}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

### ZeroTrustAccessPolicyRequireOkta <a name="ZeroTrustAccessPolicyRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#name ZeroTrustAccessPolicy#name}

---

### ZeroTrustAccessPolicyRequireSaml <a name="ZeroTrustAccessPolicyRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_name ZeroTrustAccessPolicy#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#attribute_value ZeroTrustAccessPolicy#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_access_policy#identity_provider_id ZeroTrustAccessPolicy#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessPolicyApprovalGroupList <a name="ZeroTrustAccessPolicyApprovalGroupList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyApprovalGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get"></a>

```csharp
private ZeroTrustAccessPolicyApprovalGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyApprovalGroupOutputReference <a name="ZeroTrustAccessPolicyApprovalGroupOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyApprovalGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailListUuid">ResetEmailListUuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```

##### `ResetEmailListUuid` <a name="ResetEmailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.resetEmailListUuid"></a>

```csharp
private void ResetEmailListUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput">ApprovalsNeededInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuidInput">EmailListUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuid">EmailListUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalsNeededInput`<sup>Optional</sup> <a name="ApprovalsNeededInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput"></a>

```csharp
public double ApprovalsNeededInput { get; }
```

- *Type:* double

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailListUuidInput`<sup>Optional</sup> <a name="EmailListUuidInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuidInput"></a>

```csharp
public string EmailListUuidInput { get; }
```

- *Type:* string

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.approvalsNeeded"></a>

```csharp
public double ApprovalsNeeded { get; }
```

- *Type:* double

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `EmailListUuid`<sup>Required</sup> <a name="EmailListUuid" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.emailListUuid"></a>

```csharp
public string EmailListUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyApprovalGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyConnectionRulesOutputReference <a name="ZeroTrustAccessPolicyConnectionRulesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyConnectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.putSsh">PutSsh</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsh` <a name="PutSsh" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.putSsh"></a>

```csharp
private void PutSsh(ZeroTrustAccessPolicyConnectionRulesSsh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.putSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference">ZeroTrustAccessPolicyConnectionRulesSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.sshInput">SshInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ssh`<sup>Required</sup> <a name="Ssh" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.ssh"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRulesSshOutputReference Ssh { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference">ZeroTrustAccessPolicyConnectionRulesSshOutputReference</a>

---

##### `SshInput`<sup>Optional</sup> <a name="SshInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.sshInput"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRulesSsh SshInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRules">ZeroTrustAccessPolicyConnectionRules</a>

---


### ZeroTrustAccessPolicyConnectionRulesSshOutputReference <a name="ZeroTrustAccessPolicyConnectionRulesSshOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyConnectionRulesSshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.usernamesInput">UsernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.usernames">Usernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsernamesInput`<sup>Optional</sup> <a name="UsernamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.usernamesInput"></a>

```csharp
public string[] UsernamesInput { get; }
```

- *Type:* string[]

---

##### `Usernames`<sup>Required</sup> <a name="Usernames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.usernames"></a>

```csharp
public string[] Usernames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSshOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessPolicyConnectionRulesSsh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyConnectionRulesSsh">ZeroTrustAccessPolicyConnectionRulesSsh</a>

---


### ZeroTrustAccessPolicyExcludeAuthContextList <a name="ZeroTrustAccessPolicyExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeAuthContextOutputReference <a name="ZeroTrustAccessPolicyExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeAzureList <a name="ZeroTrustAccessPolicyExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeAzureOutputReference <a name="ZeroTrustAccessPolicyExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeExternalEvaluationList <a name="ZeroTrustAccessPolicyExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeGithubList <a name="ZeroTrustAccessPolicyExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeGithubOutputReference <a name="ZeroTrustAccessPolicyExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeGsuiteList <a name="ZeroTrustAccessPolicyExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeGsuiteOutputReference <a name="ZeroTrustAccessPolicyExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeList <a name="ZeroTrustAccessPolicyExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeOktaList <a name="ZeroTrustAccessPolicyExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeOktaOutputReference <a name="ZeroTrustAccessPolicyExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeOutputReference <a name="ZeroTrustAccessPolicyExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList">ZeroTrustAccessPolicyExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList">ZeroTrustAccessPolicyExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList">ZeroTrustAccessPolicyExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList">ZeroTrustAccessPolicyExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList">ZeroTrustAccessPolicyExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList">ZeroTrustAccessPolicyExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList">ZeroTrustAccessPolicyExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessPolicyExcludeAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAuthContextList">ZeroTrustAccessPolicyExcludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessPolicyExcludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeAzureList">ZeroTrustAccessPolicyExcludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessPolicyExcludeExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeExternalEvaluationList">ZeroTrustAccessPolicyExcludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessPolicyExcludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGithubList">ZeroTrustAccessPolicyExcludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessPolicyExcludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeGsuiteList">ZeroTrustAccessPolicyExcludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessPolicyExcludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOktaList">ZeroTrustAccessPolicyExcludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessPolicyExcludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList">ZeroTrustAccessPolicyExcludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeSamlList <a name="ZeroTrustAccessPolicyExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get"></a>

```csharp
private ZeroTrustAccessPolicyExcludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyExcludeSamlOutputReference <a name="ZeroTrustAccessPolicyExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyExcludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyExcludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeAuthContextList <a name="ZeroTrustAccessPolicyIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeAuthContextOutputReference <a name="ZeroTrustAccessPolicyIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeAzureList <a name="ZeroTrustAccessPolicyIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeAzureOutputReference <a name="ZeroTrustAccessPolicyIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeExternalEvaluationList <a name="ZeroTrustAccessPolicyIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeGithubList <a name="ZeroTrustAccessPolicyIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeGithubOutputReference <a name="ZeroTrustAccessPolicyIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeGsuiteList <a name="ZeroTrustAccessPolicyIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeGsuiteOutputReference <a name="ZeroTrustAccessPolicyIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeList <a name="ZeroTrustAccessPolicyIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeOktaList <a name="ZeroTrustAccessPolicyIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeOktaOutputReference <a name="ZeroTrustAccessPolicyIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeOutputReference <a name="ZeroTrustAccessPolicyIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList">ZeroTrustAccessPolicyIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList">ZeroTrustAccessPolicyIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList">ZeroTrustAccessPolicyIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList">ZeroTrustAccessPolicyIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList">ZeroTrustAccessPolicyIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList">ZeroTrustAccessPolicyIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList">ZeroTrustAccessPolicyIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessPolicyIncludeAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAuthContextList">ZeroTrustAccessPolicyIncludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessPolicyIncludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeAzureList">ZeroTrustAccessPolicyIncludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessPolicyIncludeExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeExternalEvaluationList">ZeroTrustAccessPolicyIncludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessPolicyIncludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGithubList">ZeroTrustAccessPolicyIncludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessPolicyIncludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeGsuiteList">ZeroTrustAccessPolicyIncludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessPolicyIncludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOktaList">ZeroTrustAccessPolicyIncludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessPolicyIncludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList">ZeroTrustAccessPolicyIncludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeSamlList <a name="ZeroTrustAccessPolicyIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get"></a>

```csharp
private ZeroTrustAccessPolicyIncludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyIncludeSamlOutputReference <a name="ZeroTrustAccessPolicyIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyIncludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyIncludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireAuthContextList <a name="ZeroTrustAccessPolicyRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireAuthContextOutputReference <a name="ZeroTrustAccessPolicyRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireAzureList <a name="ZeroTrustAccessPolicyRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireAzureOutputReference <a name="ZeroTrustAccessPolicyRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireExternalEvaluationList <a name="ZeroTrustAccessPolicyRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireGithubList <a name="ZeroTrustAccessPolicyRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireGithubOutputReference <a name="ZeroTrustAccessPolicyRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireGsuiteList <a name="ZeroTrustAccessPolicyRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireGsuiteOutputReference <a name="ZeroTrustAccessPolicyRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireList <a name="ZeroTrustAccessPolicyRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireOktaList <a name="ZeroTrustAccessPolicyRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireOktaOutputReference <a name="ZeroTrustAccessPolicyRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireOutputReference <a name="ZeroTrustAccessPolicyRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList">ZeroTrustAccessPolicyRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList">ZeroTrustAccessPolicyRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList">ZeroTrustAccessPolicyRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList">ZeroTrustAccessPolicyRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList">ZeroTrustAccessPolicyRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList">ZeroTrustAccessPolicyRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList">ZeroTrustAccessPolicyRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessPolicyRequireAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAuthContextList">ZeroTrustAccessPolicyRequireAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessPolicyRequireAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireAzureList">ZeroTrustAccessPolicyRequireAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessPolicyRequireExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireExternalEvaluationList">ZeroTrustAccessPolicyRequireExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessPolicyRequireGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGithubList">ZeroTrustAccessPolicyRequireGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessPolicyRequireGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireGsuiteList">ZeroTrustAccessPolicyRequireGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessPolicyRequireOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOktaList">ZeroTrustAccessPolicyRequireOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessPolicyRequireSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList">ZeroTrustAccessPolicyRequireSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireSamlList <a name="ZeroTrustAccessPolicyRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get"></a>

```csharp
private ZeroTrustAccessPolicyRequireSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessPolicyRequireSamlOutputReference <a name="ZeroTrustAccessPolicyRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessPolicyRequireSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessPolicy.ZeroTrustAccessPolicyRequireSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



