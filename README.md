# Elemental

[![Code style](https://github.com/rancher/elemental/actions/workflows/lint.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/lint.yaml)

| Rancher stable (night) | Rancher head 2.7 (8am) | Rancher head 2.8 (9am) | Rancher head 2.9 (10am) |
| - | - | - | - |
| [![CLI-K3s](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_stable.yaml) | [![CLI-K3s](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.7.yaml) | [![CLI-K3s](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.8.yaml) | [![CLI-K3s](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-rm_head_2.9.yaml)
| [![CLI-RKE2](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_stable.yaml)| [![CLI-RKE2](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.7.yaml) | [![CLI-RKE2](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.8.yaml) | [![CLI-RKE2](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-rm_head_2.9.yaml) 
| [![CLI-K3s-Reset](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_stable.yaml) | [![CLI-K3s-Reset](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.7.yaml) | [![CLI-K3s-Reset](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.8.yaml) | [![CLI-K3s-Reset](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-reset-rm_head_2.9.yaml) 
| [![CLI-RKE2-Reset](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_stable.yaml) | [![CLI-RKE2-Reset](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.7.yaml) | [![CLI-RKE2-Reset](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.8.yaml) |[![CLI-RKE2-Reset](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-reset-rm_head_2.9.yaml)
| [![CLI-K3s-Sequential](https://github.com/rancher/elemental/actions/workflows/cli-k3s-sequential-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-sequential-rm_stable.yaml) | N/A | N/A | N/A
| [![CLI-RKE2-Sequential](https://github.com/rancher/elemental/actions/workflows/cli-rke2-sequential-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-sequential-rm_stable.yaml) | N/A | N/A |N/A
| [![CLI-K3s-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/cli-k3s-os-upgrade-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-os-upgrade-rm_stable.yaml) | N/A | N/A | N/A
| [![CLI-RKE2-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/cli-rke2-os-upgrade-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-os-upgrade-rm_stable.yaml) | N/A | N/A |N/A
| [![CLI-K3s-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_stable.yaml) | [![CLI-K3s-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.7.yaml) | [![CLI-K3s-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.8.yaml) | [![CLI-K3s-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-rm_head_2.9.yaml)  
| [![CLI-RKE2-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_stable.yaml) | [![CLI-RKE2-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.7.yaml) | [![CLI-RKE2-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.8.yaml) | [![CLI-RKE2-Hardened](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-rm_head_2.9.yaml) 
| [![CLI-K3s-Hardened-Upgrade-Reset](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-upgrade-reset-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-hardened-upgrade-reset-rm_stable.yaml) | N/A | N/A | N/A 
| [![CLI-RKE2-Hardened-Upgrade-Reset](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-upgrade-reset-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-hardened-upgrade-reset-rm_stable.yaml) | N/A | N/A | N/A  
| [![CLI-K3s-MultiCluster](https://github.com/rancher/elemental/actions/workflows/cli-k3s-multi_cluster-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-multi_cluster-rm_stable.yaml) | N/A | N/A | N/A
| [![CLI-RKE2-MultiCluster](https://github.com/rancher/elemental/actions/workflows/cli-rke2-multi_cluster-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-rke2-multi_cluster-rm_stable.yaml) | N/A | N/A | N/A
| [![CLI-K3s-Scalability](https://github.com/rancher/elemental/actions/workflows/cli-k3s-scalability-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-scalability-rm_stable.yaml) | N/A | N/A | N/A
| [![UI-K3s](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_stable.yaml) | [![UI-K3s](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.7.yaml) | [![UI-K3s](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.8.yaml) | [![UI-K3s](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-rm_head_2.9.yaml)
| [![UI-RKE2](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_stable.yaml) | [![UI-RKE2](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.7.yaml) | [![UI-RKE2](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.8.yaml) | [![UI-RKE2](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-rm_head_2.9.yaml) 
| [![UI-K3s-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_stable.yaml) | [![UI-K3s-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.7.yaml) | [![UI-K3s-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.8.yaml) | [![UI-K3s-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-k3s-os-upgrade-rm_head_2.9.yaml)
| [![UI-RKE2-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_stable.yaml) | [![UI-RKE2-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.7.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.7.yaml) | [![UI-RKE2-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.8.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.8.yaml) | [![UI-RKE2-OS-Upgrade](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.9.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/ui-rke2-os-upgrade-rm_head_2.9.yaml)

## Airgap test
[![CLI-K3s-Airgap-RM_latest](https://github.com/rancher/elemental/actions/workflows/cli-k3s-airgap_rm_latest_dev.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-airgap_rm_latest_dev.yaml) [![CLI-K3s-Airgap-RM_stable](https://github.com/rancher/elemental/actions/workflows/cli-k3s-airgap_rm_stable.yaml/badge.svg?branch=main)](https://github.com/rancher/elemental/actions/workflows/cli-k3s-airgap_rm_stable.yaml)

Elemental is a software stack enabling a centralized, full cloud-native OS management solution with Kubernetes.

Cluster Node OSes are built and maintained via container images through the [Elemental Toolkit](https://rancher.github.io/elemental-toolkit/) and installed on new hosts using the [Elemental CLI](https://github.com/rancher/elemental-cli).

The [Elemental Operator](https://github.com/rancher/elemental-operator) and the [Rancher System Agent](https://github.com/rancher/system-agent) enable Rancher Manager to fully control Elemental clusters, from the installation and management of the OS on the Nodes to the provisioning of new K3s or RKE2 clusters in a centralized way.

Follow our [Quickstart](https://rancher.github.io/elemental/quickstart/) or see the [full docs](https://rancher.github.io/elemental/) for more info.
